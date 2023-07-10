"use server"

import { NextRequest } from 'next/server';
import { randomBytes } from 'crypto';

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
    return new Response(JSON.stringify({error: false, message: "Tokens match"}), {status: 200})
  }


