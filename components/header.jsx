'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaSquareInstagram, FaSquareFacebook, FaSquareWhatsapp, FaBars } from "react-icons/fa6";
import { RiWhatsappLine } from "react-icons/ri";
import Aos from 'aos'
import "aos/dist/aos.css"
import logo from "@/images/logo.png"
import Image from 'next/image';

export const Header = () => {
    const [burgur, setBurger] = useState(false)
    const links = [
        // { lable: "Acceil", link: "/" },
        { lable: "Nos Voiture", link: "/" },
        { lable: "Contact", link: "/" },
        { lable: "A propos", link: "/" },
    ]

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <div className='w-full h-[70px] fixed z-50 top-0 border-b bg-[#F5F5F5]' data-aos="fade-down" data-aos-duration="1000">
                {/* nav */}
                <div className='mx-0 z-30 w-[390px] justify-center ipadmini:w-[750px] ipadmini:mx-0 mintablet:w-[800px] tablet:w-full tablet:mx-auto h-full max-w-7xl flex flex-row mintablet:justify-center items-center px-3 xl:px-0'>
                    {/* logo */}
                    {/* <div className='h-full flex items-center mr-6'>
                        <Image src={logo} alt='benadda dream car' width={70} height={50} />
                    </div> */}
                    {/* links */}
                    {/* <div className='hidden tablet:flex'>
                    {links.map((link, k) => (
                        <Link key={k} href={link.link} className='mx-3 hover:text-red-600'>{link.lable}</Link>
                    ))}
                </div> */}
                    {/* contact icons */}
                    <div className='flex items-center'>
                        <Link href="https://www.facebook.com/profile.php?id=61560495572393&mibextid=ZbWKwL">
                            <FaSquareFacebook className='mr-3 text-[20px] mintablet:text-[30px]' />
                        </Link>
                        <Link href='https://www.instagram.com/benaddadreamcar?igsh=eW1qNmtsOXpreTVp'>
                            <FaSquareInstagram className='mr-3 text-[20px] mintablet:text-[30px]' />
                        </Link>

                        <Link href="https://wa.me/message/M35EHZUWKRZKG1">
                            <div className='w-fit h-fit px-2  py-1 flex border align-middle items-center bg-black text-white'>
                                <RiWhatsappLine className='mr-3 text-[20px] items-center' /><p>Contacter nous</p>

                            </div>
                        </Link>
                    </div>
                    {/* <div className='tablet:hidden' onClick={() => setBurger(!burgur)}>
                    <FaBars />
                </div> */}

                </div>
                {/* mobile nav */}

            </div>
        </div>
    )
}
