import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { Github, Link2Icon } from 'lucide-react';

const ProjectCard = ({item}:any) => {
  return (
    <Card className="max-w-[400px] shadow-lg border-[1px] relative rounded-2xl ">
      <CardHeader className="flex group max-h-[400px] relative flex-col cursor-pointer bg-orange-50 gap-3 overflow-hidden">
      <div className="absolute top-[40%] left-[35%] flex z-50 gap-4">
          <Link href={"https://github.com/king-sws?tab=repositories"} className="bg-slate-900 hover:text-[var(--main)] text-white w-[54px] h-[54px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full gap-2 transition-all duration-200 "> <Link2Icon  />  </Link>
          <Link href={"https://github.com/king-sws?tab=repositories"} className="bg-slate-900 hover:text-[var(--main)] text-white w-[54px] h-[54px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full gap-2 transition-all duration-200 "> <Github  />  </Link>
        </div>
        <p className='absolute top-2 left-2 capitalize text-[10px] font-bold bg-[var(--main)] px-2 rounded-full text-white ' > {item.cartegory} </p>
        <img alt="nextui logo" width={247} height={250} src={item.image} className='  shadow-2xl opacity-100 z-40 ' />
        <div className="absolute -top-14 right-0">
          <img src="./work/project-bg-light.png" alt="" />
          <img src="./work/project-bg-dark.png" alt="" />
        </div>
        
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className='font-semibold text-[20px] px-2' > {item.name} </p>
      </CardBody>
      
      <CardFooter className='w-full' >
        <p className='text-slate-500 px-2 -mt-3' > {item.decsription} </p>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard