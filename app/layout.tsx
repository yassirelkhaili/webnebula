import './globals.css';
import { Metadata } from 'next';
import Header from './header'
import { Roboto, Inter, Lato } from 'next/font/google'
import ContextProvider from './utils/themeprovider';

const robotolight = Roboto({subsets: ["latin"], weight: ["400"],  variable: '--font-robotolight',})
const roboto = Roboto({subsets: ["latin"], weight: ["700"],  variable: '--font-roboto',})
const inter = Inter({subsets: ["latin"], weight: ["500"],  variable: '--font-inter',})
const lato = Lato({subsets: ["latin"], weight: ["700"],  variable: '--font-lato',}) 

export const metadata : Metadata = {
  title: {
    template: '%s | Webnebula', 
    default: 'Webnebula | Web Services'
  },
  description: 'At Webnebula, we specialize in crafting dynamic and visually stunning websites that captivate users and drive results. Get a seamless and interactive web solution with our custom front-end and back-end development packages.',
  generator: 'Next.js',
  applicationName: 'Webnebula',
  referrer: 'origin-when-cross-origin',
  keywords: ['Webnebula', 'web development', 'custom websites', 'responsive design', 'front-end development', 'back-end development', 'React.js', 'Tailwind CSS', 'Laravel', 'PHP', 'RESTful APIs', 'SEO', 'project management', 'web design', 'website development', 'user experience (UX)', 'mobile-friendly websites', 'e-commerce websites', 'content management systems (CMS)', 'WordPress development', 'UI/UX design', 'website maintenance', 'website optimization', 'cross-browser compatibility', 'web application development', 'database design', 'JavaScript development', 'CSS3', 'HTML5', 'website performance', 'website security', 'responsive web design', 'website architecture'],
  authors: [{ name: 'Yassir Elkhaili', url: 'https://github.com/yassirelkhaili'}, { name: 'Zakaria Ghazoune', url: 'https://github.com/ZakariaCoder' }],
  colorScheme: 'dark',
  themeColor: "black", 
  creator: 'Yassir Elkhaili',
  publisher: 'Zakaria Ghazoune',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://webnebula.com'),
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotolight.variable} ${inter.variable} ${lato.variable} ${roboto.variable}`}>
      <ContextProvider>
      <Header/>
      {children}
      </ContextProvider>
      </body>
  </html>
  )
}
