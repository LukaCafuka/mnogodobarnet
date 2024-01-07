import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

const page = () => {
  return (
    <div className=''>
        <div className='absolute left-0 right-0'>
          <div className='flex justify-center flex-col items-center h-screen'>
            <h2 className='text-4xl font-bold'>Uskoro...</h2>
            <h2 className='text-md font-medium'>Ova stranica je trenutno u izgradnji, no možete pogledati ostale mrežne lokacije ispod..</h2>
            <div className="flex">
              {/* <Button destination="https://ftp.mnogodobar.net">FTP stranica</Button>
              <Button destination="https://cdn.mnogodobar.net">CDN stranica</Button> */}
              <Button destination="https://iskra.mnogodobar.net">IskraForum stranica</Button> 
            </div>
            
            <h2 className='text-xl font-light mt-6'>Powered by: <b className='font-semibold'>mnogodobar.net</b></h2>
          </div>
        </div>

    </div>
    
  )
}

export default page