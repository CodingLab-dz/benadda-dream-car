'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import banner from "@/images/banner.webp"
import section from "@/images/section.png"
import { FaSquareInstagram, FaSquareFacebook, FaSquareWhatsapp, FaBars } from "react-icons/fa6";
import { RiWhatsappLine } from "react-icons/ri";

import Aos from 'aos'
import "aos/dist/aos.css"
export const Contact = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='w-full h-fit min-h-[500px] mt-24' id='contact'>
            <div className='w-full max-w-7xl h-full mx-auto flex flex-col justify-between tablet:flex-row px-3 lg:px-0'>
                <div className='w-full tablet:w-[50%] ' data-aos="fade-up" data-aos-duration="1500">
                    <div className='w-fit h-fit my-3'>
                        <h1 className='font-bold text-[30px] tablet:text-[50px] mb-6'>Contact</h1>
                        <h2 className='font-semibold text-[20px] tablet:text-[30px] mb-3 text-red-600'>Nos Condition</h2>
                        <ul className=''>
                            <li className='mb-3'>-Permis de conduire en cours de validité de plus 2 ans </li>
                            <li className='mb-3'>-Age minimum de 25ans</li>
                            <li className='mb-3'>-Une caution de garantie doit être déposée à l'agence jusqu' à la restitution du véhicule. <br /> (Le montant de la caution varie selon le modèle du véhicule.) </li>
                            <li className='mb-3'>-Un règlement partiel (ou total) est demandé pour la confirmation d'une réservation de véhicule.</li>
                        </ul>

                        {/* contact icons */}
                        <div className='flex items-center my-6'>
                            <Link href='https://www.facebook.com/profile.php?id=61560495572393&mibextid=ZbWKwL'>
                                <FaSquareFacebook className='mr-3 text-[30px]' />
                            </Link>

                            <Link href='https://www.instagram.com/benaddadreamcar?igsh=eW1qNmtsOXpreTVp'>
                                <FaSquareInstagram className='mr-3 text-[30px]' />
                            </Link>
                            <div className='w-fit h-fit px-6 py-1 flex border bg-black text-white'>
                                <RiWhatsappLine className='mr-3 text-[20px] items-center' />
                                (+213) 792210397
                            </div>
                        </div>
                    </div>
                </div>
                {/* image */}
                <div className='w-full h-full tablet:w-[50%] flex justify-end bg-center bg-cover' data-aos="fade-left" data-aos-duration="1500">
                    <Image src={section} alt='section' style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
        </div>
        // <div className='w-full h-fit min-h-[500px] mt-24 ' id='contact'>
        //     <div className='w-full h-fit min-h-[500px] mx-auto relative'>
        //         <div className='w-full h-full absolute bottom-0 left-0 flex flex-col justify-start items-center bg-[#000000b3] z-10'>
        //             <div className='w-full max-w-7xl flex justify-center items-start mx-auto h-full py-12'>
        //                 <div className='m-fit h-fit text-left'>
        //                     <h1 className='text-[30px] font-bold mx-auto text-red-600'>Contact</h1>
        //                     <ul className='text-white'>
        //                         <li>Permis de conduire en cours de validité de plus 2 ans </li>
        //                         <li>Age minimum de 25ans</li>
        //                         <li>Une caution de garantie doit être déposée à l'agence jusqu' à la restitution du véhicule. (Le montant de la caution varie selon le modèle du véhicule.) </li>
        //                         <li>Un règlement partiel (ou total) est demandé pour la confirmation d'une réservation de véhicule.</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
