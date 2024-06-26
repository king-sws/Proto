import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className='overflow-hidden relative mt-[6rem] mb-[10rem] ' >
        <div className="containe w-full">
          <div className="absolute w-[10rem] h-[10rem] bg-white rounded-full opacity-30 -left-10 " />
          <div className="absolute w-[10rem] h-[10rem] bg-white rounded-full opacity-30 left-[1rem] top-[7rem]  " />
            <div className="flex justify-center items-center flex-col rounded-3xl bg-gradient-to-r from-cyan-300 to-teal-500 p-10 ">
                <h1 className='text-[25px] lg:text-[45px] md:text-[35px] text-center mb-5 max-w-[750px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-slate-900 ' >Prepared to turn your ideas into reality? I'm here to help </h1>
                <Link href={'contact'} >
                    <button className='py-3 px-4 font-semibold text-white hover:bg-sky-800 bg-sky-600 transition-all rounded-xl  ' >Contact me</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Contact