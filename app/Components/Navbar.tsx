'use client'
import React, { useEffect, useState } from 'react';
import { Nav } from '../Contant/Nav'; // Assuming this import is correct
import Link from 'next/link';
import Mobile from './Mobile';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();
  const [header, setHeader] = useState(false); // Corrected variable name

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <header className={`${header ? 'bg-white shadow-lg' : ''} sticky top-0 z-30 transition-all `} >
      <nav className="containe flex justify-between items-center">
        <Link href={'/'} >
      <img src="./kk.png" alt="Logo" width={80} height={50} />
        </Link>
      <div className="hidden md:flex gap-8 ">
        {Nav.map((link, i) => (
          <Link href={link.path} key={i} className="capitalize relative hover:text-[var(--main)]">
            {link.path === path && (
              <motion.span initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ type: 'tween' }} layoutId="underline" className="absolute left-0 top-full h-[2px] bg-[var(--main)] w-full" />
            )}
            {link.name}
          </Link>
        ))}    
      </div>
      <Mobile />
    </nav>
    </header>
    
  );
};

export default Navbar;
