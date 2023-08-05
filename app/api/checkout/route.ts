"use server";

import generateEmail from "@/app/constants/email/contact-template";
import { NextRequest } from "next/server";
import { randomBytes } from "crypto";
import axios from "axios";
import { createTransport } from "nodemailer";
import * as z from "zod";
import { PrismaClient } from "@prisma/client";
import getUSDToMoneroExchangeRate from "@/lib/access-coinapi-data";

let csrf_token: string;
const prisma = new PrismaClient();
const isValidPackageType = (value: string): boolean =>
  ["basic", "standard", "premium"].includes(value);
const validationSchema = z.object({
  Name: z
    .string()
    .nonempty("Please enter your name.")
    .min(3, { message: "Name must be at least 3 characters." })
    .max(70, { message: "Name must not exceed 70 characters." }),
  Email: z
    .string()
    .email("Please enter a valid email address.")
    .max(255, { message: "Email must not exceed 255 characters." }),
  Phone: z.string().regex(/^\d{10}$/i, "Please enter a valid phone number."),
  Organisation: z
    .string()
    .nonempty("Please enter your organization.")
    .max(160, { message: "Company name must not exceed 160 characters." }),
  Payment: z.string({
    required_error: "Please select a payment option.",
  }),
  Coupon: z.string().refine(
    (value: String) => {
      if (value === "") {
        return true;
      }
      return value.length >= 5 && value.length <= 12;
    }, (val) => (val.length < 5 ? {message: "Coupon must be at least 5 charracters"} : {message : "Coupon must not exceed 12 charracters"})), 
  Feedback: z
    .string()
    .max(2000, { message: "Feedback must not exceed 2000 characters." }),
  Packagetype: z.string().refine(isValidPackageType, {
    message: "Please select a valid packagetype (basic, standard, or premium)",
  }),
  recaptchaToken: z.string(),
  theme: z.string(),
});
type validationProps = z.infer<typeof validationSchema>;
export async function saveUserCheckoutData(validatedData: validationProps) {
  const couponIsValid = (Coupon: string) =>
    ["NEBULA2023", "LAUNCHPARTY", "WEBLAUNCH10"].includes(Coupon);
  const { Name, Email, Phone, Organisation, Payment, Feedback, theme, Coupon } =
    validatedData;
  const existingUser = await prisma.checkoutdata.findFirst({
    where: {
      OR: [{ clientEmail: Email }, { clientOrg: Organisation }],
    },
  });
  if(Coupon) {
    if (couponIsValid(Coupon)) {
      if (existingUser) {
        if (existingUser.CouponCode) {
          const newArray = Array.isArray(existingUser.CouponCode)
            ? existingUser.CouponCode
            : [];
          for (const code of newArray) {
            if (code === Coupon) {
              return {
                error: true,
                type: "coupon", 
                message: "This Coupon code has already been used.",
              };
            }
          }
          newArray.push(Coupon);
          const updatedUser = await prisma.checkoutdata.update({
            where: { id: existingUser.id },
            data: {
              CouponCode: newArray,
            },
          });
          return updatedUser;
        } else {
          const updatedUser = await prisma.checkoutdata.update({
            where: { id: existingUser.id },
            data: {
              CouponCode: [`${Coupon}`],
            },
          });
          return updatedUser;
        }
      } else {
        const user = await prisma.checkoutdata.create({
          data: {
            clientName: Name,
            clientEmail: Email,
            clientPhone: Phone,
            clientOrg: Organisation,
            clientTheme: theme,
            PaymentMethod: Payment,
            CouponCode: [`${Coupon}`],
            clientFeedback: Feedback,
          },
        });
        return user;
      }
    } else {
      return { error: true, type: "coupon", message: "Invalid or expired Coupon Code." };
    }
  } else {
    const user = await prisma.checkoutdata.create({
      data: {
        clientName: Name,
        clientEmail: Email,
        clientPhone: Phone,
        clientOrg: Organisation,
        clientTheme: theme,
        PaymentMethod: Payment,
        clientFeedback: Feedback,
      },
    });
    return user;
  }
}

export async function GET(request: NextRequest) {
  const token = randomBytes(32).toString("hex");
  csrf_token = token;
  const origin = request.headers.get("Origin");
  const allowedOrigins = [
    `${process.env.NEXT_PUBLIC_APP_URL}`,
    `${process.env.NEXT_PUBLIC_APP_URL_WWW}`,
  ];

  if (origin) {
    if (!allowedOrigins.includes(origin)) {
      return new Response(
        JSON.stringify({ error: true, message: "Invalid Origin" }),
        { status: 403 }
      );
    }
  }

  const referer = request.headers.get("Referer");
  if (
    !referer ||
    !allowedOrigins.some((allowedOrigin) => referer.startsWith(allowedOrigin))
  ) {
    return new Response(
      JSON.stringify({ error: true, message: "Invalid referer" }),
      { status: 403 }
    );
  }
  return new Response(JSON.stringify(csrf_token), {
    status: 200,
    headers: {
      "Set-Cookie": `csrf=${csrf_token}; Path=/; HttpOnly; SameSite=Strict; Secure`,
    },
  });
}

export async function POST(request: NextRequest) {
  const Token = request.cookies.get("csrf");
  if (Token?.value !== csrf_token) {
    return new Response(
      JSON.stringify({ error: true, message: "Tokens dont match" }),
      { status: 401 }
    );
  }
  const data = await request.json();
  try {
    validationSchema.parse(data);
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errors = err.errors.map((err) => {
        return {
          code: err.code,
          path: err.path,
          message: err.message,
        };
      });
      return new Response(
        JSON.stringify({
          error: true,
          message: "data validation issue",
          errors: errors,
        }),
        { status: 401 }
      );
    }
  }
  const recaptchaToken = data.recaptchaToken;
  const response = await axios.post(
    "https://www.google.com/recaptcha/api/siteverify",
    null,
    {
      params: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      },
    }
  );
  const { success } = response.data;
  const sendMail = async (type: "checkout-transfer" | "checkout-monero") => {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
        pass: process.env.GOOGLE_SMTP_EMAIL,
      },
    });
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      to: data.Email,
      subject:
        type === "checkout-transfer"
          ? `Wire Transfer Payment Details for ${data.Organisation}`
          : `Monero Payment Details for ${data.Organisation}`,
      html: generateEmail(data, data.theme, type),
    });
  };
  if (success) {
    const validatedData = validationSchema.parse(data);
    let prismaReponse;
    try {
      prismaReponse = await saveUserCheckoutData(validatedData);
    } catch (error) {
      console.log("An error has occured", error);
    } finally {
      prisma.$disconnect();
    }
    if (prismaReponse && "error" in prismaReponse) {
      return new Response(JSON.stringify(prismaReponse), { status: 401 });
    }
    if (process.env.COIN_API_KEY) {
      try {
        const exchangeRateData = await getUSDToMoneroExchangeRate(process.env.COIN_API_KEY);
        console.log('USD to XMR exchange rate:', exchangeRateData.rate);
        let usdAmount: number;
        switch (data.Packagetype) {
          case "basic":
            usdAmount = 149.99;
            break;
          case "standard":
            usdAmount = 249.99;
            break;
          case "premium":
            usdAmount = 349.99;
            break;
          default:
            console.log("error", "no package type");
            usdAmount = 0;
        }
        
        if (usdAmount !== undefined) {
          const xmrAmount = (usdAmount * exchangeRateData.rate).toFixed(4);
          console.log(`USD Amount: $${usdAmount}`);
          console.log(`XMR Amount: ${xmrAmount} XMR`);
        } else {
          console.log("Error: Unable to calculate XMR amount due to missing or invalid package type.");
        }
        
      } catch (error) {
        console.log(error)
      }
    }
    switch (validatedData.Payment) {
      case "WireTransfer":
        sendMail("checkout-transfer");
        break;
      case "Monero":
        sendMail("checkout-monero");
        break;
      default:
        return new Response(
          JSON.stringify({
            error: true,
            message: "Problem processing the request",
          }),
          { status: 401 }
        );
    }
    return new Response(
      JSON.stringify({ error: false, message: "payment instructions sent" }),
      { status: 200 }
    );
  } else {
    return new Response(
      JSON.stringify({ error: true, message: "reCAPTCHA verification failed" }),
      { status: 401 }
    );
  }
}
