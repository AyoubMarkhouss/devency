import React from 'react'
import Image from 'next/image'
const Logo = ({className}:{className?:string}) => {
  return (
    <div className='flex justify-center items-center'>
        <Image alt='logo' src='/violeta.png' height={500} width={500} className={className} />
    </div>
  )
}

export default Logo