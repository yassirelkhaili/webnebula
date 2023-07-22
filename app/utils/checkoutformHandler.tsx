"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  formContentProps,
  buttonLabel,
  formContent,
  feedbackContent, 
  payementoptionContent
} from "../constants/contact";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  Name: z
    .string()
    .nonempty("Please enter your name.")
    .min(3, { message: "Name must be at least 3 characters." })
    .max(70, { message: "Name must not exceed 70 characters." }),
  Email: z
    .string()
    .email("Please enter a valid email address.")
    .max(255, { message: "Email must not exceed 255 characters." }),
  Phone: z
    .string()
    .regex(/^\d{10}$/i, "Please enter a valid phone number."),
  Organisation: z
    .string()
    .nonempty("Please enter your organization.")
    .max(160, { message: "Company name must not exceed 160 characters." }),
  Payement: z
  .string({
    required_error: "Please select a payement option.",
  }), 
  Feedback: z
    .string()
    .max(2000, { message: "Feedback must not exceed 2000 characters." }),
});

export type formValueProps = z.infer<typeof formSchema>;

export default function CheckoutForm() {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setcurrentTheme] = useState(theme);
  const [forceRerender, setforceRerender] = useState(false);
  const [recaptchaToken, setrecaptchaToken] = useState("");
  const [isloading, setisloading] = useState(false)
  useEffect(() => {
    setcurrentTheme(theme === "system" ? systemTheme : theme);
    setforceRerender((prev) => !prev);
  }, [theme, systemTheme]);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/checkout`,
          { method: "GET" }
        );
        if (!response.ok) {
          const responseMessage = await response.json();
          console.error(responseMessage.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchToken();
  }, []);
  const {
    setError,
    formState: { errors },
  } = useForm();
  const form = useForm<formValueProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Phone: "",
      Organisation: "",
      Feedback: "",
    },
  });

  const handleRecaptchaChange = (token: string) => {
    setrecaptchaToken(token);
  };

  async function onSubmit(data: formValueProps) {
    setisloading(true)
    console.log(data)
    if (recaptchaToken) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/checkout`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...data,
              recaptchaToken: recaptchaToken,
              theme: currentTheme,
            }),
          }
        );
        const responseMessage = await response.json();
        if (response.ok) {
          toast({
            title: "You submitted the following values:",
            description: (
              <pre className="mt-2 w-[340px] rounded-md dark:bg-slate-950 bg-slate-50 p-4">
                <code className="dark:text-white text-dark">
                  {JSON.stringify(data, null, 2)}
                </code>
              </pre>
            ),
          });
          console.log(responseMessage.message);
        } else {
          console.error(responseMessage.errors && responseMessage.errors)
          toast({
            title:
              "Form submission failed. Refresh the page and try again or contact us directly via:",
            description: (
              <pre className="mt-2 w-[340px] rounded-md dark:bg-slate-950 bg-slate-50 p-4">
                <a
                  className="underline dark:text-white text-dark"
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                </a>
              </pre>
            ),
          });
          throw new Error(responseMessage.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setError("recaptcha", {
        type: "manual",
        message: "Please complete the reCAPTCHA",
      });
    }
    setisloading(false)
  }
  const errorMessage = errors.recaptcha?.message?.toString() ?? null;
  return (
    <Card className="container mt-8 sm:max-w-[40rem]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            {formContent.map((formItem: formContentProps) => {
              return (
                <FormField
                  control={form.control}
                  name={formItem.name as "Name"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{formItem.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={formItem.placeholder} {...field} />
                      </FormControl>
                      <FormDescription>{formItem.description}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            })}
            <FormField
          control={form.control}
          name={payementoptionContent.name as "Payement"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{payementoptionContent.label}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={payementoptionContent.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {payementoptionContent.options.map((payementOption : string, index) => {
                    if (index === 0) {
                      return <SelectItem value="Stripe">{payementOption}</SelectItem>
                    } else if (index === 1) {
                      return <SelectItem value="WireTransfer">{payementOption}</SelectItem>
                    } else {
                      return <SelectItem value={payementOption}>{payementOption}</SelectItem>
                    }
                  })}
                </SelectContent>
              </Select>
              <FormDescription>
                {payementoptionContent.description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
              control={form.control}
              name={feedbackContent.name as "Feedback"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{feedbackContent.label}</FormLabel>
                  <span className="text-sm pl-1 text-slate-500 dark:text-slate-400">(optional)</span>
                  <FormControl>
                    <Textarea
                      placeholder={feedbackContent.placeholder}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {feedbackContent.description}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="captcha-container">
              <ReCAPTCHA
                className=".g-recaptcha"
                sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
                theme={currentTheme}
                key={forceRerender}
                onChange={handleRecaptchaChange}
              />
              {errors.recaptcha && (
                <p className="text-sm font-medium text-red-500 dark:text-red-900 mt-[8px]">
                  {errorMessage}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className={buttonVariants({ variant: "primary" })}
              disabled={isloading}
            >
              {buttonLabel}
            </Button>
          </CardContent>
        </form>
      </Form>
    </Card>
  );
}

export const mainContactTitle: string = "Contact Us";
export const checkoutFormTitle : string = "Confirm Order"; 
