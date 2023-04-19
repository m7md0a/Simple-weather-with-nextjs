import React from 'react'
import spinner from "../public/sp.gif"
import Image from 'next/image'


function Spinner() {
  return (
    <>
    <Image className='w-[150px] mx-auto block' src={spinner} alt='loading' />
    </>
  )
}

export default Spinner