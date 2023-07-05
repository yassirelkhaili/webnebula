"use client"

import { useEffect } from "react";
import printData from "../api/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
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

const formSchema = z.object({
  Name: z.string().nonempty("Please enter your name.").min(3, {message: "Name must be at least 3 characters."}).max(30, {message: "Name must not be longer than 30 characters."}),
  Email: z.string().email("Please enter a valid email address."),
  Phone: z.string().regex(/^\d{10}$/i, "Please enter a valid phone number."),
  Organisation: z.string().nonempty("Please enter your organization."),
  Subject: z.string().nonempty("Please enter a subject."),
  Message: z.string().nonempty("Please enter a message."),
})

export type FormValueProps = z.infer<typeof formSchema>;

export default function ContactForm () {
  const form = useForm<FormValueProps>({
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
  
    function onSubmit(data: FormValueProps) {
      printData(data).then(result => {
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

  return (
    <Card className="container mt-8 sm:max-w-[40rem]">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>
              Provide your name for contact and identification purposes.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
              Please provide your email address so we can get back to you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Phone" {...field} />
              </FormControl>
              <FormDescription>
              Enter your phone number so we can reach you if needed.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Organisation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company/Organisation</FormLabel>
              <FormControl>
                <Input placeholder="Company" {...field} />
              </FormControl>
              <FormDescription>
              Specify the name of your company or organization.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormDescription>
              Enter the subject or topic of your message.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
              Compose your message or inquiry here.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={buttonVariants({ variant: "primary" })}>Send Message</Button>
        </CardContent>
      </form>
    </Form>
    </Card>
  )
}

export const contactTitle: string = "Contact Us";
