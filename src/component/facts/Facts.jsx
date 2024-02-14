import React from 'react'

function Facts() {
   
    const cards=[
        {
            id:"1",
           
            title:"800",
            content:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those"
        },
        {
            id:"2",
           
            title:"1200",
            content:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those"
        },
        {
            id:"3",
          
            title:"700",
            content:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those"
        },
     
        
    ]
    
  return (
   <>
   <div className=' text-white container mx-auto py-28 text-center'>
    <h1 className='text-xl  mb-4 text-[#f9004d]'>Our Fun Facts </h1>
    <p className=' mb-8 text-[18px] text-5xl  font-medium'>Completed 1200+ Projects <br/>
Successfully.</p>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {
        cards.map((item)=>{
         return   <div className=' group  text-white px-8 py-8 gap-4 m-4 rounded-xl '>
            <span className='text-[#f9004d] text-6xl mb-8 inline-block group-hover:text-white'>{item.icon}</span>
                <h2 className='text-[50px] mb-8 text-[#f9004d] font-bold counter display-3 d-block' >{item.title}+</h2>
                <p className='text-[#c6c9d8] mb-8 text-[18px] group-hover:text-white'>{item.content}</p>
    
    </div>
        })
       
    }
    </div>
    </div>
    
 
   
   </>
  )
}

export default Facts