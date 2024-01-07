import React from 'react'
import Link from 'next/link'

const Button = ({children, onClick, destination}) => {
  return (
    <Link href={destination}>
        <div className='bg-slate-700 rounded px-5 py-1 m-2 text-white hover:bg-slate-600 duration-200'>
            {children}
        </div>
    </Link>
  )
}

export default Button