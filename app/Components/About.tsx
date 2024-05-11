import { ChevronDown, GraduationCap, HomeIcon, MailIcon, PhoneCall, University, User2 } from 'lucide-react'
import React from 'react'
import BasicTabs from './Tabs'

const About = () => {
  return (
    <section id="about" className="mt-[6rem] ">
        <div className="containe w-full">
            <div className="flex flex-col relative items-center mb-12">
                <div className="flex gap-6 items-center relative">
                <div className="w-5 h-5 rounded-full border-2 border-black " />
                <div className="w-5 h-5 rounded-full bg-[var(--main)] absolute -left-1 top-[24px] lg:top-[30px] -z-10 " />
                <h1 className='text-[40px] lg:text-[50px] font-semibold tracking-wide '>About me</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 flex-col lg:flex-row gap-8 items-center">
                <div className="relative mt-5 mr-0 lg:mr-[7rem] ">
                    <img src="./about/shape-light.svg" alt="" className='' width={400} />
                    <img src="./about/developer.png" alt="" width={400} className='absolute bottom-0 ' />
                </div>
                <BasicTabs />
            </div>
        </div>
    </section>
  )
}

export default About