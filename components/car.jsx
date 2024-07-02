'use client'

import React, {useEffect}from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card'
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";
import { GiCarDoor, GiGearStickPattern} from "react-icons/gi";
import { Button } from './ui/button'
import Image from 'next/image';
import { Imagesbtn } from './imagesbtn';

import Aos from 'aos'
import "aos/dist/aos.css"

export const Car = ({nom, energ, places, moteur, ports, gear, img}) => {
    useEffect(()=>{
        Aos.init()
    }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="1500">

            <Card className='border p-3 w-[320px] shadow-xl hover:-translate-y-2 transition-all cursor-pointer'>
                <CardContent className='flex flex-col w-full'>
                    {/* image */}
                    <div className='w-full h-[200px] bg-center bg-cover'>
                        <Image src={img[0].img} alt={img[0].alt} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className='flex flex-row justify-between items-start my-3'>
                        <div className='flex flex-col'>
                            <h2 className='text-[20px] '>{nom}</h2>
                            <h4 className='font-light text-[15px]'>Or semilar</h4>
                        </div>
                        <div className='text-red-600'>
                            <h2>{energ}</h2>
                        </div>
                    </div>
                    {/* chaise & moteur */}
                    <div className='flex flex-row justify-between '>
                        <div className='flex items-center'>
                            <MdAirlineSeatReclineExtra className='text-[20px] text-red-600' />
                            <span className='text-[15px] ml-3'>{places}</span>
                        </div>
                        <div className='flex items-center justify-start'>
                            <PiEngineFill className='text-[20px] text-red-600' />
                            <span className='text-[15px] ml-3'>{moteur}</span>
                        </div>
                    </div>
                    {/* ports & boits */}
                    <div className='flex flex-row justify-between mt-3'>
                        <div className='flex items-center'>
                            <GiCarDoor className='text-[20px] text-red-600' />
                            <span className='text-[15px] ml-3'>{ports}</span>
                        </div>
                        <div className='flex items-center justify-start'>
                            <GiGearStickPattern className='text-[20px] text-red-600' />
                            <span className='text-[15px] ml-3'>{gear}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex mt-6 justify-between">
                    <Button className='w-[85%]'>prendre une resrvation</Button>
                    <Imagesbtn images={img}/>
                </CardFooter>
            </Card>
        </div>
    )
}
