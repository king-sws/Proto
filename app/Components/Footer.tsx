import { Github, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-800 py-[4rem] ' >
      <div className="flex containe gap-10 justify-center items-center text-white flex-col">
        <nav className='flex gap-10 ' >
        <Link href={'/'} > <Youtube className='ease-in-out duration-300 transition delay-15 hover:-translate-y-1' /> </Link>
        <Link href={'/'} > <Linkedin className='ease-in-out duration-300 transition delay-15 hover:-translate-y-1' /> </Link>
        <Link href={'/'} > <Github className='ease-in-out duration-300 transition delay-15 hover:-translate-y-1' /> </Link>
        <Link href={'/'} > <Instagram className='ease-in-out duration-300 transition delay-15 hover:-translate-y-1' /> </Link>  
      </nav>
      <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
      
    </footer>
  )
}

export default Footer