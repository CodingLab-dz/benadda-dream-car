'use client'

import React, {useEffect}from 'react'
import Image from 'next/image'
import banner from "@/images/banner.webp"
import banner2 from "@/images/banner2.jpg"
import { Button } from './ui/button'
import Aos from 'aos'
import "aos/dist/aos.css"
import Link from 'next/link'

export const Banner = () => {
    useEffect(()=>{
        Aos.init()
    }, [])
    return (
        <div className='w-full h-fit mt-[100px] lg:px-0' data-aos="fade-up" data-aos-duration="1200">
            <div className='w-full max-w-7xl h-[300px] mintablet:h-[400px] tablet:h-[600px] mx-auto bg-center bg-cover relative'>
                <Image src={banner2} alt='banner' style={{ width: '100%', height: '100%' }} />
                <div className='w-full h-full absolute bottom-0 left-0 flex flex-col justify-end items-center bg-gradient-to-t from-[#000000] to-[#0505050d] z-10 pb-10 tablet:pb-20 text-white'>
                    <Link href="https://wa.me/message/M35EHZUWKRZKG1"><Button className='bg-transparent border border-white text-[30px] bg-white text-black'>Contacter Nous</Button></Link>
                </div>
            </div>
        </div>
    )
}
