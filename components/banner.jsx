'use client'

import React, {useEffect}from 'react'
import Image from 'next/image'
import banner from "@/images/banner.webp"
import { Button } from './ui/button'
import Aos from 'aos'
import "aos/dist/aos.css"
import Link from 'next/link'

export const Banner = () => {
    useEffect(()=>{
        Aos.init()
    }, [])
    return (
        <div className='w-full h-fit mt-[100px] px-3 lg:px-0' data-aos="fade-up" data-aos-duration="1200">
            <div className='w-full max-w-7xl h-[300px] tablet:h-[500px] mx-auto bg-center bg-cover relative bg-red-600'>
                <Image src={banner} alt='banner' style={{ width: '100%', height: '100%' }} />
                <div className='w-full h-full absolute bottom-0 left-0 flex flex-col justify-end items-center bg-gradient-to-t from-[#000000] to-[#0505050d] z-10 pb-10 tablet:pb-20 text-white'>
                    <h1 className='font-bold text-[20px] tablet:text-[50px] my-3'>Bouster Votre Experiace De Voyage</h1>
                    <Link href="#contact"><Button className='bg-transparent border border-white'>Prendre une reservation</Button></Link>
                </div>
            </div>
        </div>
    )
}
