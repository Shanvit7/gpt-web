import './globals.css'
import { Darker_Grotesque } from 'next/font/google'
import { APP_NAME } from './utils'
const darker_groteque = Darker_Grotesque({ subsets: ['latin'],weight: '600' })

export const metadata = {
  title: APP_NAME,
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