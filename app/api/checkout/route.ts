"use server";

import generateEmail from "@/app/constants/email/contact-template";
import { NextRequest } from "next/server";
import { randomBytes } from "crypto";
import axios from "axios";
import { createTransport } from "nodemailer";
import * as z from "zod";
import { PrismaClient } from "@prisma/client";

let csrf_token: string;
const prisma = new PrismaClient();
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
  Subject: z
    .string()
    .nonempty("Please enter a subject.")
    .max(255, { message: "Subject must not exceed 255 characters." }),
  Message: z
    .string()
    .nonempty("Please enter a message.")
    .max(2000, { message: "Message must not exceed 2000 characters." }),
  recaptchaToken: z.string(),
  theme: z.string(),
});
type validationProps = z.infer<typeof validationSchema>;
export async function saveUserContactData(validatedData: validationProps) {
  const { Name, Email, Phone, Organisation, Subject, Message, theme } =
    validatedData;
  const user = await prisma.contactdata.create({
    data: {
      clientName: Name,
      clientEmail: Email,
      clientPhone: Phone,
      clientOrg: Organisation,
      messageSubject: Subject,
      messageContent: Message,
      clientTheme: theme,
    },
  });
  return user;
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
