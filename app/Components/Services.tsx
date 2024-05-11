import { Blocks, GanttChartSquare, Gem } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
    <section className="">
        <div className="containe w-full my-12">
            <div className="relative mb-16 flex gap-4 justify-center items-center ">
                <div className="relative">
                    <div className="w-5 h-5 rounded-full border-2 border-black " />
                    <div className="w-5 h-5 rounded-full bg-[var(--main)] absolute -left-1 top-[3px] -z-10 " />
                </div>
                <h1 className='text-[40px] lg:text-[50px] font-semibold ' > My Services </h1>
            </div>
            <div className="grid grid-col-1 lg:grid-cols-3 justify-center md:grid-cols-2 gap-y-12 gap-x-4 lg:gap-x-8 ">
                <div className="relative rounded-2xl ">
                <Gem className='absolute ml-[40%] -top-8 bg-white' color='var(--main)' size={60} />
                <div className="border-2 rounded-xl p-6">
                    <h1 className='mt-8 mb-5 text-center font-bold text-2xl ' >Web Design</h1>
                    <p className=' text-center text-slate-600 leading-7 tracking-wide ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nostrum voluptatum dolor ducimus, itaque in quam ullam. Vel, qui magnam.</p>
                </div>
                </div>
                <div className="relative ">
                <Blocks className='absolute ml-[40%] -top-8 bg-white' color='var(--main)' size={60} />
                <div className="border-2 rounded-xl p-6">
                    <h1 className='mt-8 mb-5 text-center font-bold text-2xl ' >Web Development</h1>
                    <p className=' text-center text-slate-600 leading-7 tracking-wide ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nostrum voluptatum dolor ducimus, itaque in quam ullam. Vel, qui magnam.</p>
                </div>
                </div>
                <div className="relative ">
                <GanttChartSquare className='absolute ml-[40%] -top-8 bg-white' color='var(--main)' size={60} />
                <div className="border-2 rounded-xl p-6">
                    <h1 className='mt-8 mb-5 text-center font-bold text-2xl ' >App Development</h1>
                    <p className=' text-center text-slate-600 leading-7 tracking-wide ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nostrum voluptatum dolor ducimus, itaque in quam ullam. Vel, qui magnam.</p>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services