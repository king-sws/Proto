'use client'
import * as React from 'react';
import CountUP from 'react-countup'

interface Bag {
    containerS: string;
    icon: any;
    endC: number;
    endCT?: string;
    bg: string;
}

const Badge = ({ containerS, icon, endC, endCT, bg }: Bag) => {
    return <div className={`badge text-black ${containerS}`}>
        <div className="text-3xl text-[var(--main)] "> {icon} </div>
        <div className="flex">
            <div className="flex gap-2 items-center">
                <CountUP end={endC} delay={1} duration={4} className='text-[var(--main)] text-3xl ml-2 font-bold ' />
                {endCT}
                <div className="max-w-[70px] leading-none text-[15px] font-medium "> {bg} </div>
            </div>
        </div>
    </div>;
};

export default Badge;
