import React from 'react'
import { Send , Download, Youtube, Linkedin, Github, Facebook, Instagram, Archive, NotepadText } from 'lucide-react';
import Link from 'next/link';
import Badge from './Badge';

const Hero = () => {
  return (
    <section id="" className="">
      <img src="./hero/hero-bg.png" alt="" className='absolute -z-50 top-0 left-0 ' />
      <div className="containe w-full my-10">
        <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row ">
          <div className="flex flex-col items-center lg:items-start md:items-start">
          <h4 className='text-[var(--main)] tracking-wider text-[15px] ' >WEB DEVLOPER</h4>
          <h1 className='text-[40px] lg:text-[60px] md:text-[50px] font-extrabold max-w-[500px] ' >Hello, my name is KiNG SwS</h1>
          <p className='text-slate-500 mt-3 leading-8 tracking-wide max-w-[440px] ' >Brief description with inisghts into myself, my vocational journey, and what I engage in Professionally</p>
          <div className="flex gap-5  ">
            <Link href={'contact'} >
            <button className='mt-5 bg-[var(--main)] hover:bg-[var(--ap)] text-white rounded-full p-3 flex gap-2 items-center ' >Contact me <Send  size={20} /> </button>
            </Link>
            <button className='mt-5 bg-slate-900 hover:bg-slate-800 text-white rounded-full p-3 flex gap-2 items-center ' >Install cv <Download size={20} /> </button>
          </div>
          <div className="flex flex-row gap-4 my-8 cursor-pointer">
            <Link href={'https://www.youtube.com'} ><Youtube className='ease-in-out duration-300 transition delay-15 hover:-translate-y-1'  /></Link> 
            <Link href={'https://www.Linkedin.com'}><Linkedin className='ease-in-out duration-300 transition delay-15 hover:-translate-y-1 '/></Link>
            <Link href={'https://www.Linkedin.com'}><Github className='ease-in-out duration-300 transition delay-15 hover:-translate-y-1 ' /></Link>
            <Link href={'https://www.Linkedin.com'}><Facebook className='ease-in-out duration-300 transition delay-15 hover:-translate-y-1 ' /></Link>
            <Link href={'https://www.Linkedin.com'}><Instagram className='ease-in-out duration-300 transition delay-15 hover:-translate-y-1 ' /></Link>
          </div>
          
          </div>
           
          <div className="relative mt-10 lg:mt-0 ">
            <div>
              <div className="">
                <Badge icon={<Archive />} endC={2} bg='Years of experience' containerS='absolute border-[1px] -top-[45px] lg:top-[24px] -left-[20px] lg:-left-[5rem] md:left-[15px]' />
                <Badge icon={<NotepadText  />} endC={6} bg='Finished Projects' endCT='K' containerS='absolute border-[1px] top-[70%] lg:top-[50%] -left-[1rem] lg:-left-[7rem] ' />
                <Badge icon={<NotepadText  />} endC={4} bg='Happy Clients' endCT='K' containerS='absolute border-[1px] top-[50%] lg:top-[45%] -right-[1rem] lg:-right-[3rem] md:-right-[4rem] ' />
              </div>
            <img src="./hero/shape-1.svg" alt="" className='absolute' />
            <img src="./hero/shape-2-light.svg" alt="" />
            <img src="./hero/developer.png" alt="" className='absolute top-0'/>
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero