import React from 'react'
import image1 from '../../image/brawo1.jpg'
import image2 from '../../image/brawo2.jpg'
import image3 from '../../image/brawo3.jpg'
import image4 from '../../image/brawo4.jpg'
import image5 from '../../image/brawo5.jpg'
import image6 from '../../image/brawo6.jpg'
function Team() {
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
        {
            id: "5",
            path: image5
        },
        {
            id: "6",
            path: image6
        },


    ]
    return (
        <>
            <div className='  container mx-auto py-28 grid grid-cols-1 text-center md:text-left'>
                <h1 className='text-5xl font-bold mb-4 dark:text-white'>Skilled Team</h1>
                <p className='text-[#717173] mb-8 text-[18px]'>There are many variations of passages of Lorem Ipsum available,<br />
                    but the majority have suffered alteration.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-5  lg:p-0'>
                    {
                        team.map((item) => {
                            return <div className='mb-8  relative'>

                                <div className=' '>
                                    <img src={item.path} alt="" className='rounded-xl hover:z-10 w-full' />
                                    <div className='hover:bg-gradient-to-r from-[#ff004f]  to-[#000]  cursor-pointer rounded-xl  w-full z-10 h-full absolute top-0 opacity-75'></div>
                                </div>
                                {/* <div className=' absolute  bottom-0 left-14 z-20 w-[320px]'>
                                    <p className='text-[#c6c9d8] mb-4'></p>
                                    <h1 className='text-xl text-white mb-4'>aliaslam</h1>
                                    
                                </div> */}


                            </div>
                        })

                    }

                </div>
            </div>
        </>
    )
}

export default Team