'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import {Pagination} from 'swiper/modules'
import 'swiper/css/pagination'
import ProjectCard from './ProjectCard';

const projectData = [
    {
        image : '/work/3.png',
        cartegory: 'react js',
        name : 'SwS Website',
        decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
        link : '/',
        github: '/'
    },
    {
        image : '/work/4.png',
        cartegory: 'Next js',
        name : 'Marcio Website',
        decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
        link : '/',
        github: '/'
    },
    {
        image : '/work/1.png',
        cartegory: 'Next js',
        name : 'Landin Website',
        decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
        link : '/',
        github: '/'
    },
    {
        image : '/work/2.png',
        cartegory: 'react js',
        name : 'Caly Website',
        decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
        link : '/',
        github: '/'
    },
    {
        image : '/work/3.png',
        cartegory: 'react js',
        name : 'SwS Website',
        decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
        link : '/',
        github: '/'
    },
]

const Work = () => {
  return (
    <section className='mt-[6rem]' >
        <div className="containe w-full flex justify-between items-center flex-col lg:flex-row ">
            <div className="max-w-[400px] mx-auto lg:mx-0 ">
                <div className="relative mb-1 flex gap-4 justify-center lg:justify-start items-center ">
                    <div className="relative">
                        <div className="w-5 h-5 rounded-full border-2 border-black " />
                        <div className="w-5 h-5 rounded-full bg-[var(--main)] absolute -left-1 top-[3px] -z-10 " />
                    </div>
                    <h1 className='text-[30px] lg:text-[35px] font-semibold ' >Lastest Projects </h1>
                </div>
                <div className="flex justify-center lg:justify-start flex-col items-center lg:items-start">
                    <p className='text-slate-500 mb-1 text-center lg:text-start ' >Lorem ipsum dolor amet consectetur adipisicing elit.</p>
                    <Link href={'projects'} >
                        <button className='px-5 py-3 mb-8 bg-[var(--main)] text-white rounded-xl mt-2 hover:bg-[#ff8370] ' >Projects</button>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-[800px] max-w-full ">
            <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                    640: {
                    slidesPerView: 2
                    }
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>
                {projectData.slice(0.4).map((item,i)=>(
                        <SwiperSlide key={i} >
                            <ProjectCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work