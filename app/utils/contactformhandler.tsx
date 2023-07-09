"use client"
import ReCAPTCHA from "react-google-recaptcha";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
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
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button";
import { formContentProps, buttonLabel, formContent, messageContent} from "../constants/contact";

const formSchema = z.object({
    Name: z.string().nonempty("Please enter your name.").min(3, {message: "Name must be at least 3 characters."}).max(30, {message: "Name must not be longer than 30 characters."}),
    Email: z.string().email("Please enter a valid email address."),
    Phone: z.string().regex(/^\d{10}$/i, "Please enter a valid phone number."),
    Organisation: z.string().nonempty("Please enter your organization."),
    Subject: z.string().nonempty("Please enter a subject."),
    Message: z.string().nonempty("Please enter a message."),
  })
  
  export type formValueProps = z.infer<typeof formSchema>;

  export default function ContactForm () {
    const { theme, systemTheme } = useTheme();
    const [currentTheme, setcurrentTheme] = useState(theme);
    const [forceRerender, setforceRerender] = useState(false); 
    const [Token, setToken] = useState("")
    useEffect(() => {
      setcurrentTheme(theme === "system" ? systemTheme : theme);
      setforceRerender(prev => !prev); 
      fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, {
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          setToken(data.token);
        })
        .catch((error) => console.error(error));
    }, [theme, systemTheme]);
    const form = useForm<formValueProps>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        Name: "",
        Email: "", 
        Phone: "", 
        Organisation: "", 
        Subject: "", 
        Message: ""
      },
    })

      async function onSubmit(data: formValueProps) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': Token
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log('Response:', data);
          } else {
            console.error('Request failed with status:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        }
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        });
      }

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
          <ReCAPTCHA
  className=".g-recaptcha"
  sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
  theme={currentTheme}
  key={forceRerender}
/>
          <Button type="submit" className={buttonVariants({ variant: "primary" })}>{buttonLabel}</Button>
          </CardContent>
        </form>
      </Form>
      </Card>
    )
  }
  

  export const contactTitle: string = "Contact Us";