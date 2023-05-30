import './globals.css'
import { Darker_Grotesque } from 'next/font/google'

const darker_groteque = Darker_Grotesque({ subsets: ['latin'],weight: '600' })

export const metadata = {
  title: 'College GPT',
  description: 'Work in Progress',
}

const RootLayout=({ children })=>{
  return (
    <html lang="en">
      <body className={`bg-white ${darker_groteque.className}`}>{children}</body>
    </html>
  )
}

export default RootLayout;