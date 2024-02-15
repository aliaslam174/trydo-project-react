import React from 'react'
import { FaBusinessTime } from "react-icons/fa6";

function CardsFeatures() {
    const cards=[
        {
            id:"1",
            icon:<FaBusinessTime />,
            title:"Business Stratagy",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:"2",
            icon:<FaBusinessTime />,
            title:"Website Development",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:"3",
            icon:<FaBusinessTime />,
            title:"Marketing & Reporting",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:"4",
            icon:<FaBusinessTime />,
            title:"Mobile Development",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:"5",
            icon:<FaBusinessTime />,
            title:"Marketing & Reporting",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:"6",
            icon:<FaBusinessTime />,
            title:"App Development",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        
    ]
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 container mx-auto py-24'>
    {
        cards.map((item)=>{
         return   <div  className='dark:bg-black  bg-[#f6f6f6] group  dark:text-white text-black px-8 py-8 gap-4 m-4 rounded-xl cursor-pointer hover:text-white hover:bg-gradient-to-r from-[#f81f01] to-[#ee076e] hover:border-transparent hover:-translate-y-3 transition delay-150 duration-300 ease-in-out'>
            <span className='text-[#f9004d] text-6xl mb-8 inline-block group-hover:text-white'>{item.icon}</span>
                <h2 className='text-[24px] mb-8'>{item.title}</h2>
                <p className='text-[#717173] mb-8 text-[18px] group-hover:text-white'>{item.content}</p>
    
    </div>
        })
       
    }
    
    </div>
    </>
  )
}

export default CardsFeatures