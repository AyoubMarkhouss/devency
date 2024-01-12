import React from 'react'
import Image from 'next/image'
const Logo = ({className}:{className?:string}) => {
  return (
    <div className='flex justify-center items-center'>
        <Image alt='logo' src='/dev3white.png' height={700} width={700} className={className} />
    </div>
  )
}

export default Logo