'use client'
import React, {useEffect}from 'react'
import Image from 'next/image'
import banner from "@/images/banner.webp"


import Aos from 'aos'
import "aos/dist/aos.css"

import fiat from "@/images/whitefiat500/whitefiat500.webp"
import clio5w from "@/images/whiteclio5/whiteclio5.png"
import fiantiner from "@/images/whitefiat500/4.jpg"
import fiant1 from "@/images/whitefiat500/1.jpg"
import fiant2 from "@/images/whitefiat500/2.jpg"
import fiant3 from "@/images/whitefiat500/3.jpg"
import cliointer from "@/images/whiteclio5/5.jpg"
import clio1 from "@/images/whiteclio5/1.jpg"
import clio2 from "@/images/whiteclio5/2.jpg"
import clio3 from "@/images/whiteclio5/3.jpg"

//hyundai

import hi10 from "@/images/hiunday/hyundaiw.png"
import i10inter from "@/images/hiunday/2.jpg"
import i101 from "@/images/hiunday/1.jpg"
import i103 from "@/images/hiunday/3.jpg"
import i104 from "@/images/hiunday/4.jpg"

import { Button } from './ui/button'
import { Car } from './car'
export const Cars = () => {
    const cars=[
        {
            mat: "546657",
            nom: "Fiat 500",
            marque: "fiat",
            ports: "3",
            energ: "Essence",
            gear: '5-auto',
            moteur: "Hybrid",
            places: "5",
            imgs: [
                {alt: "fiatt-500", img: fiat},
                {alt: "fiat-500 interior", img: fiantiner},
                {alt: "fiat-500 ", img: fiant1},
                {alt: "fiat-500 ", img: fiant2},
                {alt: "fiat-500 ", img: fiant3},
            ]
        },
        {
            mat: "546657",
            nom: "Renault Clio5",
            marque: "Renault",
            ports: "5",
            energ: "Essence",
            gear: '5-auto',
            moteur: "Hybrid",
            places: "5",
            imgs: [
                {alt: "clio5-white", img: clio5w},
                {alt: "clio5-white interior", img: cliointer},
                {alt: "clio5-white", img: clio1},
                {alt: "clio5-white", img: clio2},
                {alt: "clio5-white", img: clio3}
                
            ]
        },
        {
            mat: "546657",
            nom: "Hyundai i10",
            marque: "Hyundai",
            ports: "5",
            energ: "Essence",
            gear: '5-auto',
            moteur: "Hybrid",
            places: "5",
            imgs: [
                {alt: "hyundai i10", img: i103},
                {alt: "hyundai i10", img: i10inter},
                {alt: "hyundai i10", img: i104},
                {alt: "hyundai i10", img: i101},
            ]
        },
    ]


    useEffect(()=>{
        Aos.init()
    }, [])

    return (
        <div className='w-full h-fit bg-[#F5F5F5] my-12' id='nosvoitures' data-aos="fade-up" data-aos-duration="1500">
            <div className='w-full h-fit max-w-7xl mx-auto flex flex-col'>
                <div className='w-full h-fit text-center mb-6'>
                    <h1 className='font-bold text-[20px] tablet:text-[50px]'>Nos voiture</h1>
                </div>
                <div className='w-fit mx-auto h-fit grid grid-cols-1 mintablet:grid-cols-2 laptop:grid-cols-3 gap-3 my-6'>
                    {
                        cars && cars.map((car, k)=>(
                            <Car key={k} nom={car.nom} places={car.places} ports={car.ports} gear={car.gear} energ={car.energ} moteur={car.moteur} img={car.imgs}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
