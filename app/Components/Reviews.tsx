'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Pagination} from 'swiper/modules'
import 'swiper/css/pagination'
import ProjectCard from './ProjectCard';
import ComC from './ComC';

const Com = [
  {
    avatar : '/reviews/avatar-1.png',
    name : 'Richard Thompson',
    jop : 'Chef',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore voluptatibus quis similique. Vero excepturi beatae quo corrupti nisi quisquam.'
  },
  {
    avatar : '/reviews/avatar-2.png',
    name : 'Evelyn Anderson',
    jop : 'Interior Designer',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore voluptatibus quis similique. Vero excepturi beatae quo corrupti nisi quisquam.'
  },
  {
    avatar : '/reviews/avatar-3.png',
    name : 'John Doe',
    jop : 'Game Dev',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore voluptatibus quis similique. Vero excepturi beatae quo corrupti nisi quisquam.'
  },
  {
    avatar : '/reviews/avatar-4.png',
    name : 'Emily Smith',
    jop : 'Therapist',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore voluptatibus quis similique. Vero excepturi beatae quo corrupti nisi quisquam.'
  },
  {
    avatar : '/reviews/avatar-5.png',
    name : 'Oliver Taylor',
    jop : 'Chef',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore voluptatibus quis similique. Vero excepturi beatae quo corrupti nisi quisquam.'
  },
  {
    avatar : '/reviews/avatar-6.png',
    name : 'Mason Wilson',
    jop : 'Video Editor',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore voluptatibus quis similique. Vero excepturi beatae quo corrupti nisi quisquam.'
  },
]

const Riviews = () => {
  return (
    <section className='mt-[6rem] ' >
        <div className="containe w-full">
            <div className="flex items-center justify-center gap-4 ">
            <div className="relative">
                    <div className="w-5 h-5 rounded-full border-2 border-black " />
                    <div className="w-5 h-5 rounded-full bg-[var(--main)] absolute -left-1 top-[3px] -z-10 " />
                </div>
                <h1 className='text-[40px] lg:text-[50px] font-semibold ' > Reviews </h1>
            </div>
            <Swiper className='h-[300px] md:h-[330px] mt-[3rem] ' slidesPerView={1} breakpoints={{
                    640: {
                    slidesPerView: 2
                    },
                    1200: {
                      slidesPerView : 3
                    },
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>
                {Com.map((item,i)=>(
                        <SwiperSlide key={i} >
                            <ComC item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    </section>
  )
}

export default Riviews