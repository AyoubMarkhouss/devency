import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <div className='flex justify-center items-center'>
        <Image alt='logo' src='/batman.png' height={500} width={500} className='w-24 ' />
    </div>
  )
}

export default Logo