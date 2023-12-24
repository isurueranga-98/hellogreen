import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import {Inter, Space_Grotesk} from 'next/font/google'
import type { Metadata } from 'next'


const inter = Inter({
  subsets : ['latin'],
  weight : ['100' , '200', '300', '400', '500', '600' , '700', '800' , '900'],
  variable : '--font-inter'
})

const spaceGrotest = Space_Grotesk({
  subsets : ['latin'],
  weight : [ '300', '400', '500', '600' , '700'],
  variable : '--font-spaceGrotest'
})

export const metadata : Metadata = {
  title : 'Hello Green',
  description : 'Non Bio waste buying and selling platform',
  icons : {
    icon : '../public/Logo.svg'
  }
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotest.variable}`}>
        <ClerkProvider appearance={{
          elements : {
            formButtonPrimary : 'primary-color hover:primary-color2'
          }
        }}>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}