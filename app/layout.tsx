import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dynamic and Visually Stunning Websites | Webnebula Web Development Services',
  description: 'At Webnebula, we specialize in crafting dynamic and visually stunning websites that captivate users and drive results. Get a seamless and interactive web solution with our custom front-end and back-end development packages.',
  keywords: 'Webnebula, web development, custom websites, responsive design, front-end development, back-end development, React.js, Tailwind CSS, Laravel, PHP, RESTful APIs, SEO, project management',
  canonicalURL: 'https://www.webnebula.com/',
  language: 'English', 
  viewport: 'width=device-width, initial-scale=1.0', 
  ogTitle: 'Dynamic and Visually Stunning Websites | Web Development Services', 
  ogDescription: 'We specialize in crafting dynamic and visually stunning websites that captivate users and drive results. Get a seamless and interactive web solution with our custom front-end and back-end development packages.', 
  author: 'Webnebula'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
