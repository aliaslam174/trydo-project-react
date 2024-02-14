import React from 'react'

function Header() {
  return (
   <>
   <div className='text-white min-h-[575px] flex  justify-center items-center'>
    <div>
    <h1 className='font-black mb-4  bg-gradient-to-r from-[#f81f01] to-[#ee076e] text-transparent bg-clip-text text-center lg:text-8xl sm:text-4xl text-2xl font-bold'>CREATIVE</h1>
    <p className='text-center text-xl sm-text-2xl text-[#c6c9d8] mb-8'>There are many variations of passages of Lorem Ipsum available but <br /> the majority have suffered alteration.</p>
    <div className='flex items-center justify-center p-2'>
            <button className='px-8 py-4 border  inline-block border-white hover:bg-[#f9004d] hover:border-transparent rounded-lg hover:-translate-y-1 transition delay-150 duration-300 ease-in-out'>CONTECT US</button>
        </div>
    </div>
    
   </div>
   </>
  )
}

export default Header