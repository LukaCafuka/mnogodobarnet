import React from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Image from 'next/image'
import algebruh from 'public/alegbruh.png'
import logo from 'public/logoNew.png';

const page = () => {
  return (
    <div className=''>
        <div className='relative left-0 right-0'>
          <Navbar/>
          <div className='flex justify-center mx-2 pt-24 sm:pt-2 sm:pb-2 pb-12 flex-col sm:items-center items-start min-h-screen'>

            <Image src={logo} className="mb-6 hidden sm:block" alt="Logo" width={100} height={100}/>
            <h2 className='text-4xl font-bold'>Dobrodošli na mnogodobar.net!</h2>
            <h2 className='md:text-lg text-md font-medium mb-4'>Ovo je glavna stranica i ujedino i web portal za usluge
              mnogodobar.net
              infrastrukture</h2>
            <h2 className='md:text-md text-sm font-medium border-b-2 pb-2'>Ispod možete pronaći poveznice koji vode do različitih
              web lokacija</h2>

            <div className="flex bg-neutral-900 rounded mt-4 p-2">
              <div className="flex flex-col items-center justify-between">

                <Link className="drop-shadow animate-pulseSlow mb-4" href="http://ftp.mnogodobar.net"><Image
                    className="rounded-full drop-shadow bg-slate-900 border-2 border-pink-900" src={algebruh}
                    height={70} width={70} alt="Algebra Infoeduka"></Image></Link>
                <p className="text-sm ">Iznad se nalaze svi studentski materijali prikupljeni sa <span className="font-semibold">Algebrine Infoeduke</span></p>
                <p className="text-sm text-gray-500">U slučaju da stranica ne radi imamo druge geografske lokacije to
                  jest <i>mirrore</i> da održamo konstantan rad servera</p>
                <div className="flex">
                  <Button destination="http://mirror3.ftp.mnogodobar.net">Mirror 1</Button>
                  <Button destination="http://mirror2.ftp.mnogodobar.net">Mirror 2</Button>
                  <Button destination="http://mirror1.ftp.mnogodobar.net">Mirror 3</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center w-full">
              <Button destination="http://cdn.mnogodobar.net">CDN</Button>
              <Button destination="http://z.com.hr">Z</Button>
              <Button destination="http://iskra.mnogodobar.net">IskraForum</Button>
              <Button destination="http://map.mc.mnogodobar.net">Minecraft karta</Button>
            </div>
            <h2 className='md:text-md text-sm font-medium italic pb-2'>Ako imate bilo kakvih pitanja,
              kontaktirajte administratora na <u className="text-blue-300"><Link
                  href="mailto:admin@mnogodobar.net">email</Link></u></h2>
            <Footer/>
          </div>

        </div>

    </div>

  )
}

export default page