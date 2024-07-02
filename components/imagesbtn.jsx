'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { IoImagesSharp } from "react-icons/io5";
import { Card, CardContent } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
export const Imagesbtn = ({ images }) => {
    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div>
            <Dialog >
                <DialogTrigger asChild>
                    <div className='w-fit bg-gray-500 text-white py-2 text-[20px] px-2'>
                        <IoImagesSharp />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] flex flex-col">
                    <div className='w-[400px] m-auto tablet:w-full'>
                        <Carousel setApi={setApi} className="w-full max-w-[400px] m-auto mt-3 ">
                            <CarouselContent>
                                {images && images.map((img, index) => (
                                    <CarouselItem key={index} className='flex aline-center item-center justify-center'>
                                        <Card className='my-auto h-[300px] w-full'>
                                            <CardContent className="flex mx-auto items-center w-fit h-full justify-center p-3 bg-center bg-cover my-auto">
                                                <Image src={img.img} alt={img.alt} style={{ width: '100%', height: '100%' }} />
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className="py-2 text-center text-sm text-muted-foreground">
                            Slide {current} of {count}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
