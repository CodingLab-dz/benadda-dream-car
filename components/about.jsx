'use client'

import React, {useEffect}from 'react'
import Image from 'next/image'
import banner from "@/images/banner.webp"
import { MdOutlineFiberNew } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

import Aos from 'aos'
import "aos/dist/aos.css"



export const About = () => {

    useEffect(()=>{
        Aos.init()
    }, [])

    return (
        <div className='w-full h-fit min-h-[500px] mt-24' id='apropos'>
            <div className='w-full max-w-7xl h-full mx-auto flex flex-col-reverse justify-between tablet:flex-row px-3 xl:px-0'>
                <div className='w-full my-3 tablet:w-[50%]  laptop:px-6' data-aos="fade-right" data-aos-duration="1500">
                    <div className='w-full tablet:w-[400px] laptop:w-full laptop:h-full h-[300px] m-auto shadow-3xl '>
                        <Image src={banner} alt='about' style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                {/* text */}
                <div className='w-full tablet:w-[50%] my-3' data-aos="fade-up" data-aos-duration="1500">
                    <h1 className='font-bold text-[30px] tablet:text-[50px] mb-6'>Pourquoi nous</h1>
                    <div className='flex my-3'>
                        <div className='w-fit h-fit p-1 bg-red-600 text-white text-[20px] mr-2'> <MdOutlineFiberNew /> </div>
                        <h2>Des Nouvelles Voitures</h2>
                    </div>
                    <div className='flex my-3'>
                        <div className='w-fit h-fit p-1 bg-red-600 text-white text-[20px] mr-2'> <BiSupport /> </div>
                        <h2>Un service client exceptionnel</h2>
                    </div>
                    <div className='flex my-3'>
                        <div className='w-fit h-fit p-1 bg-red-600 text-white text-[20px] mr-2'> <FaLocationDot /> </div>
                        <h2>Livraison à l'aéroport d'Oran Ahmed Ben Belle</h2>
                    </div>
                    <p><span className='font-bold'>Benadda-Dreamcar</span> est votre guichet unique pour une location de voiture simple, abordable et fiable en <span className='font-bold'>Algérie</span>. Que vous soyez un voyageur d'affaires, un touriste ou un résident local à la recherche d'un véhicule pour une escapade rapide,<span className='font-bold'> nous avons la voiture parfaite pour répondre à vos besoins</span>.</p>
                </div>
            </div>
        </div>
    )
}
