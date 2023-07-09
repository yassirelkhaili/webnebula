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
      return new Response('Invalid origin', { status: 403 });
    }
  }

  const referer = request.headers.get('Referer');
    if (!referer || !allowedOrigins.some((allowedOrigin) => referer.startsWith(allowedOrigin))) {
      return new Response('Invalid referer', { status: 403 });
    }

  const response = new Response(JSON.stringify({ csrf_token }), {
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `csrf_token=${csrf_token}; SameSite=Strict; Secure`,
    },
  });

  return response;
  }

  export async function POST(request: NextRequest) {
    const Token = request.headers.get("X-CSRF-Token")
    if (Token !== csrf_token) {
      return new Response('Invalid CSRF token', { status: 403 });
    }
  }


