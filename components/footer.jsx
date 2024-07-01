import React from 'react'
import Image from 'next/image'
import logo from "@/images/footerlogo.jpg"
import Link from 'next/link'
import { FaSquareInstagram, FaSquareFacebook, FaSquareWhatsapp, FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
    const phoneNumber = '+213696647876';
    return (
        <div className='w-full h-fit min-h-[200px] bg-black mt-24'>
            <div className='w-full max-w-7xl mx-auto h-fit text-white px-3 laptop:px-0 pb-3 laptop:pb-0'>
                <div className='w-full h-fit m-auto flex flex-col tablet:flex-row tablet:justify-between gap-10'>
                    {/* logo */}
                    <div className='w-[300px] mx-auto h-full my-auto'>
                        <div className='w-fit h-fit m-auto'>
                            <Image src={logo} alt='logo' width={200} height={200} />
                        </div>
                    </div>
                    <div className='flex gap-4'>

                        {/* links */}
                        <div className='w-[300px] mx-auto '>
                            <h1 className='font-bold text-[20px] mb-3'>Liens</h1>
                            <ul>
                                <li className='mb-3'>
                                    <Link href="#nosvoitures">Nos Voitures</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href="#contact">Contact</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href="#apropos">A propos</Link>
                                </li>
                            </ul>
                        </div>
                        {/* contact */}
                        <div className='w-[300px] mx-auto '>
                            <h1 className='font-bold text-[20px] mb-3'>Contact</h1>
                            <ul>
                                <li className='mb-3'>
                                    <Link href="https://www.facebook.com/profile.php?id=61560495572393&mibextid=ZbWKwL" className='flex items-center align-middle'>
                                        <FaSquareFacebook className='mr-3' /> benadda-dreamcar
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href="https://www.instagram.com/benaddadreamcar?igsh=eW1qNmtsOXpreTVp" className='flex items-center align-middle'>
                                        <FaSquareInstagram className='mr-3' /> benadda-dreamcare
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href="" className='flex items-center align-middle'>
                                        <FaLocationDot className='mr-3' /> Akid lotfi, Bir el djir, Oran, Algerie
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} className='flex items-center align-middle'>
                                        <FaSquareWhatsapp className='mr-3' /> (+213) 792210397
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* policy */}
                    {/* <div className='max-w-[300px]'>
                        <h1 className='font-bold text-[30px] mb-6'>Nos Condition</h1>
                        <ul className='text-[15px]'>
                            <li className='mb-3'>-Permis de conduire en cours de validité de plus 2 ans </li>
                            <li className='mb-3'>-Age minimum de 25ans</li>
                            <li className='mb-3'>-Une caution de garantie doit être déposée à l'agence jusqu' à la restitution du véhicule. <br /> (Le montant de la caution varie selon le modèle du véhicule.) </li>
                            <li className='mb-3'>-Un règlement partiel (ou total) est demandé pour la confirmation d'une réservation de véhicule.</li>
                        </ul>

                    </div> */}
                </div>
            </div>
        </div>
    )
}
