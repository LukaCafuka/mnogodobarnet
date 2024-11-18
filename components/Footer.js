import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
      <div className='bg-neutral-900 absolute end-0 start-0 bottom-0'>
          <div className='mx-4 mx-auto flex justify-center py-2'>
              <h2 className="font-light">Powered by <b>mnogodobar.net/m.com.hr</b> & <b><u><Link href="http://z.com.hr">z.com.hr</Link></u></b></h2>
          </div>
      </div>
  )
}

export default Footer