import React from 'react'
import Slider from "react-slick";

import image1 from '../../image/slider1.jpg';
import image2 from '../../image/slider2.jpg';
import image3 from '../../image/slider3.jpg';
import image4 from '../../image/slider4.jpg';
import image5 from '../../image/slider5.jpg';
import image6 from '../../image/slider6.jpg';
function News() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:true,
              infinite: true,
              dots: true
            }
          },
         
        ]
      };
      const team = [
        {
            id: "1",
    
            path: image1
        },
        {
            id: "2",
            path: image2
        },
        {
            id: "3",
            path: image3
        },
        {
            id: "4",
            path: image4
        },
       
    
    
    ]
    return (
        <>
            <div className='container mx-auto md:py-28 text-center md:text-left grid grid-cols-1'>
                <h1 className='text-5xl font-bold mb-4'>Latest News</h1>
                <p className='text-[#717173] mb-8 text-[18px]'>There are many variations of passages of Lorem Ipsum available,<br />
                    but the majority have suffered alteration.</p>
            </div>
            <div className="container px-5 ml-5 pb-10">
        <Slider {...settings}>
          
        
                    {
                        team.map((item) => {
                            return <div className='mb-8 p-5 relative'>
                                
                                <div className='relative'>
                                <img src={item.path} alt="" className='rounded-xl  w-full' />
                                <div className='hover:bg-gradient-to-r from-[#ff004f]  to-[#000]  cursor-pointer rounded-xl  w-full z-10 h-full absolute top-0 opacity-75'></div>
                                </div>

                                <div className=' absolute bottom-8 left-14 z-20 w-[320px]'>
                  <p className='text-[#c6c9d8] mb-4'>{item.title}</p>
                  <h1 className='text-xl text-white mb-4'>{item.content}</h1>
                  <button className='px-6 py-2 border  inline-block border-white hover:bg-[#f9004d]  hover:border-transparent rounded-lg hover:-translate-y-1 transition delay-150 duration-300 ease-in-out text-white'>READ MORE</button>
                </div>
                            </div>
                        })

                    }

                
        </Slider>
      </div>
        </>
    )
}

export default News