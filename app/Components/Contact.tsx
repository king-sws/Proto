import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className='mt-[6rem] mb-[10rem] ' >
        <div className="containe w-full">
            <div className="flex justify-center items-center flex-col rounded-3xl bg-cyan-50 p-10 ">
                <h1 className='text-[25px] lg:text-[45px] md:text-[35px] text-center mb-5 max-w-[750px] font-semibold ' >Prepared to turn your ideas into reality? I'm here to help </h1>
                <Link href={'contact'} >
                    <button className='py-3 px-4 font-semibold text-white hover:bg-[var(--ap)] bg-cyan-600 transition-all rounded-full  ' >Contact me</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Contact