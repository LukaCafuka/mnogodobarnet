import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='bg-gray-800 absolute end-0 start-0'>
      <div className='container mx-auto flex justify-between py-2'>
        <div><img src="http://cdn.mnogodobar.net/server-utils/public/logoNew.png" width={40}></img></div>
        <ul className='flex justify-center items-center'>
          {/* <Button destination={"#"}>Početna</Button> */}
          {/* <li className='pl-5'>O meni</li>
          <li className='pl-5'>Usluge</li>
          <li className='pl-5'>Kontakt</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar