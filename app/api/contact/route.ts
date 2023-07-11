"use server"
import { contactemailTemplate } from '@/app/constants/email/contact-template';
import { NextRequest } from 'next/server';
import { randomBytes } from 'crypto';
import axios from 'axios';
import { createTransport } from 'nodemailer';

let csrf_token : string

export async function GET(request: NextRequest) {
  csrf_token = randomBytes(32).toString('hex')
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
  const sendMail = async() => {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: 'webnebula0@gmail.com',
        pass: process.env.GOOGLE_SMTP_EMAIL
      }
    });
    await transporter.sendMail({
      from: "webnebula0@gmail.com", 
      to: `${data.Email}`, 
      subject: "Hello from Webnebula", 
      html: contactemailTemplate
    }).then((info) => {
      return new Response(JSON.stringify({error: false, message: "email has been sent", codename: info}), {status: 200})
    }).catch((error) => {
      return new Response(JSON.stringify({error: true, message: "email was not sent", codename: error}), {status: 400})
    })
  }
  if (success) {
  sendMail()
  } else {
    return new Response(JSON.stringify({error: true, message: "reCAPTCHA verification failed"}), {status: 401})
  }
}


