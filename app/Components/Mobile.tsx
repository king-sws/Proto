'use client'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Nav } from '../Contant/Nav'
import Link from 'next/link'

const Mobile = () => {
    const [open , setopen] = useState(false)
    const Toggle = ()=>(
        setopen(!open)
    )
  return (
    <>
    <div className="flex md:hidden" onClick={Toggle} >
        {!open ? <Menu /> : <X />}
    </div>
    <div className={`absolute top-20 right-4 w-full max-w-[9rem]  bg-slate-900 capitalize rounded-lg shadow-lg p-4 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5 ${open ? 'flex' :'hidden' } `}>
        <nav className='flex gap-4 flex-col' >
            {Nav.map((link , i)=>(
                <Link href={link.path} key={i} className='text-white hover:bg-sky-500 p-1 rounded-lg ' onClick={Toggle} >
                    {link.name}
                </Link>
            ))}
        </nav>
    </div>
    </>

  )
}

export default Mobile