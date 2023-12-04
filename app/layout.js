import { Inter } from 'next/font/google'
import './globals.css'


import Navbar from '@/app/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Mongo Crud App',
  description: 'A classic CRUD app built with Next.js and MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-3xl mx-auto p-4'>
          <Navbar />
          <div className='mt-8'>

          {children}
          </div>
        </div>
      </body>
    </html>
  )
}
