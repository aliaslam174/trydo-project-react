import React, { useState } from 'react'
import logo from '../../image/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from 'antd';
function Navbar() {
    const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
    const navitems=[
        {
            id:"1",
            item:"Home",
            link:"#Home"
        },
        {
            id:"2",
            item:"Cards",
            link:"#Cards"
        },
        {
            id:"3",
            item:"Our Portfolio",
            link:"#Portfolio"
        },
        {
            id:"4",
            item:"Facts",
            link:"#Facts"
        },
        {
            id:"5",
            item:"Team",
            link:"#Team"
        },
        {
            id:"6",
            item:"Testimonials",
            link:"#Testimonials"
        },
        {
            id:"7",
            item:"News",
            link:"#News"
        },
        {
            id:"8",
            item:"Sponserd",
            link:"#Sponserd"
        },
        
    ]
  return (
    <>

    <div className=' text-white flex justify-between  container mx-auto items-center px-4' >
        <div className='flex items-center' >
            <img src={logo} alt=""  width={140}/>
        </div>
        <div className=' items-center hidden lg:block'>
            {
                navitems.map((item)=>{
               return <a href='' className='xl:px-5 lg:px-2 py-3 hover:text-[#f9004d] inline-block font-medium ' key={item.id}>{item.item}</a>
                })
            }
            
        </div>
        <div className='text-4xl block lg:hidden'>
            <RxHamburgerMenu onClick={showDrawer}/>
        </div>
        <div className=' items-center p-2 hidden lg:block'>
            <button className='px-6 py-2 border  inline-block border-white hover:bg-[#f9004d] hover:border-transparent rounded-lg hover:-translate-y-1 transition delay-150 duration-300 ease-in-out'>LET'S TALK</button>
        </div>
        
    </div>
    {/* <div className=' text-white flex justify-between container mx-auto ' >
        <div className='flex items-center' >
            <img src={logo} alt=""  width={100}/>
        </div>
        <div className='flex items-center'>
            {
                navitems.map((item)=>{
               return <a href='' className='px-5 py-3 hover:text-[#f9004d] inline-block font-medium ' key={item.id}>{item.item}</a>
                })
            }
            
        </div>
        <div className='flex items-center p-2'>
            <button className='px-6 py-2 border  inline-block border-white hover:bg-[#f9004d] hover:border-transparent rounded-lg hover:-translate-y-1 transition delay-150 duration-300 ease-in-out'>LET'S TALK</button>
        </div>
    </div> */}
     <Drawer title="Basic Drawer" onClose={onClose} open={open}>
     <div className=' '>
            {
                navitems.map((item)=>{
               return <a href='' className='px-5 py-3 hover:text-[#f9004d] block font-medium ' key={item.id}>{item.item}</a>
                })
            }
            
        </div>
      </Drawer>

    </>
  )
}

export default Navbar