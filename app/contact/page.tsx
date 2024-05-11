import { HomeIcon, Mail, MailIcon, MessageCircle, MoveRight, PhoneCall, User, User2 } from 'lucide-react'
import React from 'react'

const infoData = [{
  icon : <MailIcon size={20} />,
  text : 'odon66674@gmail.com'
},
{
  icon : <PhoneCall size={20} />,
  text : '+212 611 852 414'
},
{
  icon : <HomeIcon size={20} />,
  text : '17 Street Mohammed V, SF, MR'
},
]

const Contant = () => {
  return (
    <section className='min-h-screen mt-[3rem] ' >
      <div className="containe w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-y-2">
              <div className="flex flex-row  items-center gap-3 ">
              <div className="w-[15px] h-[2px] bg-[var(--main)]" />
              <p className='text-[var(--main)] text-[16px] font-medium ' >Say Hello 🎉 </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className='text-[60px] max-w-[20rem] font-bold text-slate-900' >Let's Work Together.</p>
              <p className='text-slate-500 text-[16px] max-w-[19rem] ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis dolores. </p>
            </div>
          </div>
          <div className="">
            <img src="./contact/contact.avif" alt="" width={500} />
          </div>
        </div>
        <div className="grid mb-[5rem]  grid-cols-1 lg:grid-cols-2  items-center">
          <div className="mb-6">
            {infoData.map((item , i)=>(
              <div key={i} className="flex flex-row mb-5 gap-4">
                  <p className='text-blue-700 font-bold ' > {item.icon} </p>
                  <p className='font-medium text-slate-600' > {item.text} </p>
              </div>
            ))}
          </div>
          <div className="">
            <div className="w-full flex flex-col gap-5 ">
              <div className="flex relative items-center text-black border-[2px] rounded-full ">
                <input type="text" placeholder='Name' className='p-3 px-5  w-full rounded-full text-black border-none outline-blue-800  ' />
                <div className="absolute right-4 ">
                  <User className='' />
                </div>
              </div>
              <div className="flex relative items-center  text-black border-[2px] rounded-full ">
                <input type="email" placeholder='Email' className='p-3 px-5 w-full rounded-full text-black border-none outline-blue-800  ' />
                <div className="absolute right-4">
                  <Mail />
                </div>
              </div>
              <div className="flex relative text-black border-[2px] rounded-xl">
                <textarea className="p-3 px-5 w-full rounded-xl text-black border-none outline-blue-800 " placeholder="Type Your Message Here" />
                <div className="absolute right-4 top-3 " >
                  <MessageCircle />
                </div>
              </div>
            </div>  
            <div className="mt-4 flex gap-x-3">
              <button className='rounded-xl bg-blue-800 hover:bg-blue-700 gap-3 p-3 text-white flex justify-center items-center font-medium  ' >Let's Take <MoveRight /> </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contant