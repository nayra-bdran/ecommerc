import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function TheRange() {
  return (
    <div className=' mt-[184px] md:mt-20  '>
       <div className='text-center'>
       <h1 className='font-bold text-3xl text-[#3A3A3A] mb-3'>
        Browse The Range
        </h1>
        <p className='text-[#666666]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
       </div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-5 mt-6'>
      <div >
       <Image  className='sm:w-[370px] w-[370px] h-[470px] sm:h-[470px]' src={assets.Dining} alt='Dining'/>
       <h2 className='intent'>Dining</h2>
       </div>
        <div>
        <Image   className='sm:w-[370px] w-[370px] h-[470px] sm:h-[470px]' src={assets.Living} alt='Living'/>
        <h2 className='intent'>Living</h2>
        </div>
       <div>
       <Image  className=' sm:w-[370px] w-[370px] h-[470px] sm:h-[470px]' src={assets.Bedroom} alt='Bedroom'/>
       <h2 className='intent'>Bedroom</h2>
       </div>
      </div>

    </div>
  )
}

export default TheRange