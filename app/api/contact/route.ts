"use server"

import generateEmail from '@/app/constants/email/contact-template';
import { NextRequest } from 'next/server';
import { randomBytes } from 'crypto';
import axios from 'axios';
import { createTransport } from 'nodemailer';

let csrf_token : string

export async function GET(request: NextRequest) {
  const token = randomBytes(32).toString('hex')
  csrf_token = token
    const origin = request.headers.get('Origin');
  const allowedOrigins = [`${process.env.NEXT_PUBLIC_APP_URL}`, `${process.env.NEXT_PUBLIC_APP_URL_WWW}`]; 

  if(origin) {
    if (!allowedOrigins.includes(origin)) {
      return new Response(JSON.stringify({error: true, message: "Invalid Origin"}), { status: 403 });
    }
  }

  const referer = request.headers.get('Referer');
    if (!referer || !allowedOrigins.some((allowedOrigin) => referer.startsWith(allowedOrigin))) {
      return new Response(JSON.stringify({error: true, message: "Invalid referer"}), { status: 403 });
    }
    return new Response(JSON.stringify(csrf_token), {
      status: 200, 
      headers: {
        'Set-Cookie': `csrf=${csrf_token}; Path=/; HttpOnly; SameSite=Strict; Secure`,
      },
    });
  }
  
  export async function POST(request: NextRequest) {
    const Token = request.cookies.get("csrf")
    if(Token?.value !== csrf_token) {
      return new Response(JSON.stringify({error: true, message: "Tokens dont match"}), {status: 401})
    }
    const data = await request.json()
    const recaptchaToken = data.recaptchaToken; 
  const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
    params: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: recaptchaToken,
    },
  });
  const { success } = response.data;
  const sendMail = async( user : boolean ) => {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user ? process.env.NEXT_PUBLIC_CONTACT_EMAIL : process.env.NEXT_PUBLIC_CONTACT_EMAIL_OWNER,
        pass: user ? process.env.GOOGLE_SMTP_EMAIL : process.env.GOOGLE_SMTP_EMAIL_OWNER
      }
    });
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      to: user ? `${data.Email}` : process.env.NEXT_PUBLIC_CONTACT_EMAIL, 
      subject: user ? "Thank you for contacting us!" : "New Contact message!", 
      html: generateEmail(data, data.theme, user)
    })
  }
 
  if (success) {
  sendMail(true)
  sendMail(false)
  return new Response(JSON.stringify({error: false, message: "email has been sent"}), {status: 200})
  } else {
    return new Response(JSON.stringify({error: true, message: "reCAPTCHA verification failed"}), {status: 401})
  }
}


