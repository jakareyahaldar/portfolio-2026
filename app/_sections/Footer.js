import React from 'react'
import FooterSVG from '../_ui/FooterSVG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <section className=''>
        <FooterSVG />
        <div className='min-h-96 bg-[#b97858] flex flex-col items-center gap-30 py-20'>
            <div className='flex flex-col items-center gap-0'>
                <h2 className='text-[150px] translate-y-10 text-[#5f6157]'>J</h2>
                <p className='text-xl'>Jakareya | Portfolio</p>
            </div>
            <div className='text-4xl flex gap-15 justify-center'>
                <a className='hover:scale-125 transition duration-500 hover:text-black' href='' > <FontAwesomeIcon icon={faFacebook} /> </a>
                <a className='hover:scale-125 transition duration-500 hover:text-black' href='' > <FontAwesomeIcon icon={faGithub} /> </a>
                <a className='hover:scale-125 transition duration-500 hover:text-black' href='' > <FontAwesomeIcon icon={faLinkedin} /> </a>
                <a className='hover:scale-125 transition duration-500 hover:text-black' href='' > <FontAwesomeIcon icon={faWhatsapp} /> </a>
            </div>
            <p className='text-xl'>© Copyright 2026 Jakareya Haldar</p>
        </div>
    </section>
  )
}
