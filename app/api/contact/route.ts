"use server"
import { NextRequest } from 'next/server';
import { randomBytes } from 'crypto';

export async function GET(request: NextRequest) {
    const token = randomBytes(32).toString('hex')
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

  const response = new Response(JSON.stringify({ token }), {
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `csrf_token=${token}; SameSite=Strict; Secure`,
    },
  });

  return response;
  }


