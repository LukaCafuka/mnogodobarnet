import { Inter } from 'next/font/google'
import { Fira_Sans } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import './globals.css'

const fira = Fira_Sans({ 
  subsets: ['latin'],
  weight: ['100', '200', '400', '600', '800'],
 })

export const metadata = {
  title: 'mnogodobar.net',
  description: 'Projekt i mrežna infrastruktura koji bazira sebe da pomaže drugima, nudeći širi niz usluga koji su često i besplatni',
    keywords: ['mnogodobar.net', 'mnogodobarnet', 'mreža', 'algebra', 'faks', 'student', 'materijali', 'portal', 'links', 'hrvatska', 'balkan', 'services', 'free', 'community', 'croatia', 'union'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={fira.className}>
        <div className='grid flex-row grid-cols-8 grid-rows-none'>
          <div className='bg-slate-800 hidden col-span-2'>
            <Sidebar></Sidebar>
          </div>
          <div className='bg-zinc-950 col-span-full'>
            {children}
          </div>
          
        </div>
      </body>
    </html>
  )
}
