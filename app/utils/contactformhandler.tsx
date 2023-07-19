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
  messageContent,
} from "../constants/contact";

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
  Subject: z
    .string()
    .nonempty("Please enter a subject.")
    .max(255, { message: "Subject must not exceed 255 characters." }),
  Message: z
    .string()
    .nonempty("Please enter a message.")
    .max(2000, { message: "Message must not exceed 2000 characters." }),
});

export type formValueProps = z.infer<typeof formSchema>;

interface contactFormProps {
  mainpage : boolean 
}

export default function ContactForm({ mainpage } : contactFormProps) {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setcurrentTheme] = useState(theme);
  const [forceRerender, setforceRerender] = useState(false);
  const [recaptchaToken, setrecaptchaToken] = useState("");
  useEffect(() => {
    setcurrentTheme(theme === "system" ? systemTheme : theme);
    setforceRerender((prev) => !prev);
  }, [theme, systemTheme]);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
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
      Subject: "",
      Message: "",
    },
  });

  const handleRecaptchaChange = (token: string) => {
    setrecaptchaToken(token);
  };

  async function onSubmit(data: formValueProps) {
    if (recaptchaToken) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
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
              name={messageContent.name as "Message"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{messageContent.label}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={messageContent.placeholder}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {messageContent.description}
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
