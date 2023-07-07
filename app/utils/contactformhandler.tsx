"use client"
import ReCAPTCHA from "react-google-recaptcha";
import sendEmail from "../api/actions";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
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
    const [forceRerender, setForceRerender] = useState(false);
const [currentTheme, setCurrentTheme] = useState(theme);
useEffect(() => {
  setCurrentTheme(theme === "system" ? systemTheme : theme);
  setForceRerender(prevState => !prevState);
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
      function onSubmit(data: formValueProps) {
        sendEmail(data).then(result => {
          console.log(result)
        }).catch(error => {
          throw new Error(error)
        })
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        });
      }
const handleChange = () => {
  console.log("captcha is ok")
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
  sitekey="6LewC8MlAAAAAHQA7jPOK3SNbc1w2djr_LweNCas"
  onChange={handleChange}
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