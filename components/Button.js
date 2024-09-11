import React from 'react'
import Link from 'next/link'

const Button = ({children, onClick, destination, className}) => {
  return (
    <Link href={destination}>
        <div className='bg-zinc-800 whitespace-nowrap rounded px-5 py-1 m-2 text-white text-sm hover:bg-zinc-600 duration-200'>
            {children}
        </div>
    </Link>
  )
}

export default Button