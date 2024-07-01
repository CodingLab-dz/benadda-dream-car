'use client'
import React, { useRef, useEffect } from 'react'
import { Card, CardContent } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./ui/avatar"
import { Rating } from '@mui/material'
import Autoplay from 'embla-carousel-autoplay'

import Aos from 'aos'
import "aos/dist/aos.css"





export const Testimonals = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
        
    )
    const testom = [
        { fallback: "A", nom: "Abdelouahab Chetioui", rating: 3, text: "Très professionnel", style: "bg-blue-500 text-white" },
        { fallback: "M", nom: "Mustapha Benkrelifa", rating: 5, text: "", style: "bg-orange-400 text-white" },
        { fallback: "R", nom: "Rebha Darine", rating: 5, text: "", style: "bg-orange-400 text-white" },
        { fallback: "A", nom: "Abdelkayoum", rating: 3, text: "", style: "bg-blue-400 text-white" },
        { fallback: "A", nom: "Abdou Benamed", rating: 5, text: "", style: "bg-purple-700 text-white" },
        { fallback: "K", nom: "Kadiro Loranais", rating: 5, text: "", style: "bg-gray-500 text-white" },
    ]

    useEffect(()=>{
        Aos.init()
    }, [])
    return (
        <div className='w-full h-fit flex flex-col mt-[90px]' data-aos="fade-up" data-aos-duration="1500"  data-aos-anchor-placement="top-bottom">
            <div className='w-full max-w-7xl mx-auto text-center'>
                <h1 className='font-bold text-[30px] tablet:text-[50px] mb-6'>Avis des clients</h1>
            </div>
            <div className='hidden laptop:block w-fit mx-auto max-w-7xl'>
                <Carousel
                    className="flex w-fit flex-col"
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                        align: "start",
                    }}
                >
                    <CarouselContent className='w-fit mx-12'>
                        {testom && testom.map((test, index) => (
                            <CarouselItem key={index} className="basis-1/3">
                                <div className="p-1">
                                    <Card className='h-[200px]'>
                                        <CardContent className="flex flex-col items-start align-middle justify-start p-6 ">
                                            <div className='flex items-center'>
                                                <Avatar>
                                                    <AvatarFallback className={test.style}>{test.fallback}</AvatarFallback>
                                                </Avatar>
                                                <h1 className='font-semibold ml-3'>{test.nom}</h1>
                                            </div>
                                            <div className='h-fit flex min-h-[70px] items-center'>
                                                <p>{test.text}</p>
                                            </div>
                                            <Rating name="read-only" value={test.rating} readOnly />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
            <div className='w-[270px] mintablet:w-full laptop:hidden mx-auto'>
                <Carousel className="w-full max-w-[700px] mx-auto"
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {testom && testom.map((test, index) => (
                            <CarouselItem key={index} className='tablet:basis-full'>
                                <div className="p-1">
                                    <Card className='h-[200px]'>
                                        <CardContent className="flex flex-col items-start align-middle justify-start p-6 ">
                                            <div className='flex items-center'>
                                                <Avatar>
                                                    <AvatarFallback className={test.style}>{test.fallback}</AvatarFallback>
                                                </Avatar>
                                                <h1 className='font-semibold ml-3'>{test.nom}</h1>
                                            </div>
                                            <div className='h-fit flex min-h-[70px] items-center'>
                                                <p>{test.text}</p>
                                            </div>
                                            <Rating name="read-only" value={test.rating} readOnly />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </div>
    )
}
