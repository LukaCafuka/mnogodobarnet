import { Inter } from 'next/font/google'
import { Fira_Sans } from 'next/font/google'
import './globals.css'

const fira = Fira_Sans({ 
  subsets: ['latin'],
  weight: ['100', '200', '400', '600', '800'],
 })

export const metadata = {
  title: 'mnogodobarnet',
  description: 'Mreža kojoj možete vjerovati',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={fira.className}>
        <div className='flex'>
          <div className='bg-red-500'>
            {children}
          </div>
          <div className='bg-red-500'>
            {children}
          </div>
          
        </div>
      </body>
    </html>
  )
}
