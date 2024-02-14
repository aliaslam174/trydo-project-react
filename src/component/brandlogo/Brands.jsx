import React from 'react'
import image1 from '../../image/branglogo1.png'
import image2 from '../../image/branglogo2.png'
import image3 from '../../image/branglogo3.png'
import image4 from '../../image/branglogo4.png'
import image5 from '../../image/branglogo5.png'
import image6 from '../../image/brawo6.png'
function Brands() {
    const brandlogo = [
        {
            id: "1",
            path: image6
        },
        {
            id: "2",
            path: image1
        },
        {
            id: "3",
            path: image2
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
            path: image2
        },
        {
            id: "7",
            path: image3
        },
        {
            id: "8",
            path: image5
        },
        {
            id: "9",
            path: image6
        },


    ]
    return (
        <>
            <div className='grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5  container mx-auto py-32 '>

                {
                    brandlogo.map((item) => {
                        return <div className='px-12  '>
                            <img src={item.path} alt="" width={120} className='contrast-50 hover:filter-none cursor-pointer mb-8 hover:scale-125 transition delay-300 duration-300 ease-in-out' />
                        </div>

                    })
                }
            </div>



        </>
    )
}

export default Brands