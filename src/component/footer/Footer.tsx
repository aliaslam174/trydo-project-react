import React from 'react'
import logo from '../../image/logo.png'
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter } from "react-icons/ti";
function Footer() {
    const navitems=[
        {
            id:"1",
            icon:<TiSocialFacebook />
        },
        {
            id:"2",
            icon:<TiSocialLinkedin />
        },
        {
            id:"3",
            icon: <TiSocialTwitter />
           
        },
        {
            id:"4",
            icon: <SlSocialInstagram />
        },
      
        
    ]
  return (
    <>
     <div className=' text-white  container mx-auto py-8 grid lg:grid-cols-3 grid-cols-1 ' >
        <div className='lg:flex-none items-center flex justify-center lg:justify-start  mb-4 lg:mb-0' >
            <img src={logo} alt=""  width={150}/>
        </div>
        <div className='flex items-center justify-center mb-4 md:mb-0'>
            {
                navitems.map((item)=>{
               return <a href='' className='p-3 mx-4 hover:text-[#fff] inline-block border rounded-full text-[#c6c9d8] border-[#c6c9d8] hover:-translate-y-1 hover:border-transparent transition delay-150 duration-300 ease-in-out hover:bg-[#f9004d]' key={item.id}>{item.icon}</a>
                })
            }
            
        </div>
        <div className='flex items-center p-2 justify-center'>
        © 2024. All rights reserved by Rainbow-Themes.
        </div>
    </div>
    
    </>
  )
}

export default Footer