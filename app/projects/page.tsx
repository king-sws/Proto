'use client'
import React, { useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Tabs, Tab} from "@nextui-org/react";
import { Github, Link2Icon } from 'lucide-react';

const next = [
  {
      image : '/work/4.png',
      cartegory: 'Next js',
      name : 'Marcio Website',
      decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
      link : '/',
      github: '/'
  },
  {
      image : '/work/1.png',
      cartegory: 'Next js',
      name : 'Landin Website',
      decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
      link : '/',
      github: '/'
  },
]
const projectData = [
  {
      image : '/work/3.png',
      cartegory: 'react js',
      name : 'SwS Website',
      decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
      link : '/',
      github: '/'
  },
  {
      image : '/work/4.png',
      cartegory: 'Next js',
      name : 'Marcio Website',
      decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
      link : '/',
      github: '/'
  },
  {
      image : '/work/1.png',
      cartegory: 'Next js',
      name : 'Landin Website',
      decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
      link : '/',
      github: '/'
  },
  {
      image : '/work/2.png',
      cartegory: 'FullStack',
      name : 'Caly Website',
      decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
      link : '/',
      github: '/'
  },
  {
      image : '/work/3.png',
      cartegory: 'react js',
      name : 'SwS Website',
      decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
      link : '/',
      github: '/'
  },
]
const react = [
  {
      image : '/work/2.png',
      cartegory: 'react js',
      name : 'SwS Website',
      decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
      link : '/',
      github: '/'
  },
  {
      image : '/work/3.png',
      cartegory: 'react js',
      name : 'SwS Website',
      decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
      link : '/',
      github: '/'
  },
]
const full = [
  {
    image : '/work/2.png',
    cartegory: 'FullStack',
    name : 'Caly Website',
    decsription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat?',
    link : '/',
    github: '/'
},
]

const Projects = () => {
  return (
    <section className='my-[5rem] min-h-screen ' >
      <div className="containe w-full">
          <div className="relative mb-16 flex gap-4 justify-center items-center ">
                <div className="relative">
                    <div className="w-5 h-5 rounded-full border-2 border-black " />
                    <div className="w-5 h-5 rounded-full bg-[var(--main)] absolute -left-1 top-[3px] -z-10 " />
                </div>
                <h1 className='text-[40px] lg:text-[50px] font-semibold ' > My Projects </h1>
            </div>

            <div className="flex items-center justify-center ">
                <div className="flex w-full flex-col">
                  <Tabs aria-label="Options" className='lg:border-[1px] md:border-[1px]  md:rounded-full lg:rounded-full max-w-[600px] flex flex-col justify-center items-center w-full m-auto ' >
                    <Tab key="All" title="All Projects" >
                      <Card className='mt-10' >
                        <CardBody className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-7 ' >
                          {projectData.map((item , i)=>(
                            <div key={i} className="flex flex-row">
                              <Card className="max-w-[400px] shadow-lg border-[1px] relative rounded-2xl ">
                                <CardHeader className="flex group max-h-[400px] relative flex-col cursor-pointer bg-orange-50 gap-3 overflow-hidden">
                                <div className="absolute top-[40%] left-[35%] flex z-50 gap-4">
                                    <Link href={item.link} className="bg-slate-900 hover:text-[var(--main)] text-white w-[54px] h-[54px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full gap-2 transition-all duration-200 "> <Link2Icon  />  </Link>
                                    <Link href={item.link} className="bg-slate-900 hover:text-[var(--main)] text-white w-[54px] h-[54px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full gap-2 transition-all duration-200 "> <Github  />  </Link>
                                  </div>
                                  <p className='hidden lg:flex absolute top-2 left-2 capitalize text-[8px] font-bold bg-[var(--main)] px-2 rounded-full text-white ' > {item.cartegory} </p>
                                  <img alt="nextui logo" width={247} height={250} src={item.image} className='  shadow-2xl opacity-100 z-20 ' />
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
                            </div>
                          ))}
                        </CardBody>
                      </Card>  
                    </Tab>
                    <Tab key="h" title="React Js">
                      <Card className='mt-10' >
                      <CardBody className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-7 ' >
                          {react.map((item , i)=>(
                            <div key={i} className="flex flex-row">
                              <Card className="max-w-[400px] shadow-lg border-[1px] relative rounded-2xl ">
                                <CardHeader className="flex group max-h-[400px] relative flex-col cursor-pointer bg-orange-50 gap-3 overflow-hidden">
                                <div className="absolute top-[40%] left-[35%] flex z-50 gap-4">
                                    <Link href={item.link} className="bg-slate-900 hover:text-[var(--main)] text-white w-[54px] h-[54px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full gap-2 transition-all duration-200 "> <Link2Icon  />  </Link>
                                    <Link href={item.link} className="bg-slate-900 hover:text-[var(--main)] text-white w-[54px] h-[54px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full gap-2 transition-all duration-200 "> <Github  />  </Link>
                                  </div>
                                  <p className='hidden lg:flex absolute top-2 left-2 capitalize text-[8px] font-bold bg-[var(--main)] px-2 rounded-full text-white ' > {item.cartegory} </p>
                                  <img alt="nextui logo" width={247} height={250} src={item.image} className='  shadow-2xl opacity-100 z-20 ' />
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
                            </div>
                          ))}
                        </CardBody>
                      </Card> 
                    </Tab>
                    <Tab key="music" title="Next Js">
                    <Card className='mt-10' >
                    <CardBody className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-7 ' >
                          {next.map((item , i)=>(
                            <div key={i} className="flex flex-row">
                              <Card className="max-w-[400px] shadow-lg border-[1px] relative rounded-2xl ">
                                <CardHeader className="flex group max-h-[400px] relative flex-col cursor-pointer bg-orange-50 gap-3 overflow-hidden">
                                <div className="absolute top-[40%] left-[35%] flex z-50 gap-4">
                                    <Link href={item.link} className="bg-slate-900 hover:text-[var(--main)] text-white w-[54px] h-[54px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full gap-2 transition-all duration-200 "> <Link2Icon  />  </Link>
                                    <Link href={item.link} className="bg-slate-900 hover:text-[var(--main)] text-white w-[54px] h-[54px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full gap-2 transition-all duration-200 "> <Github  />  </Link>
                                  </div>
                                  <p className='hidden lg:flex absolute top-2 left-2 capitalize text-[8px] font-bold bg-[var(--main)] px-2 rounded-full text-white ' > {item.cartegory} </p>
                                  <img alt="nextui logo" width={247} height={250} src={item.image} className='  shadow-2xl opacity-100 z-20 ' />
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
                            </div>
                          ))}
                        </CardBody>
                      </Card>  
                    </Tab>
                    <Tab key="videos" title="Full Stack">
                    <Card className='mt-10' >
                    <CardBody className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-7 ' >
                          {full.map((item , i)=>(
                            <div key={i} className="flex flex-row">
                              <Card className="max-w-[400px] shadow-lg border-[1px] relative rounded-2xl ">
                                <CardHeader className="flex group max-h-[400px] relative flex-col cursor-pointer bg-orange-50 gap-3 overflow-hidden">
                                <div className="absolute top-[40%] left-[35%] flex z-50 gap-4">
                                    <Link href={item.link} className="bg-slate-900 hover:text-[var(--main)] text-white w-[54px] h-[54px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full gap-2 transition-all duration-200 "> <Link2Icon  />  </Link>
                                    <Link href={item.link} className="bg-slate-900 hover:text-[var(--main)] text-white w-[54px] h-[54px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full gap-2 transition-all duration-200 "> <Github  />  </Link>
                                  </div>
                                  <p className='hidden lg:flex absolute top-2 left-2 capitalize text-[8px] font-bold bg-[var(--main)] px-2 rounded-full text-white ' > {item.cartegory} </p>
                                  <img alt="nextui logo" width={247} height={250} src={item.image} className='  shadow-2xl opacity-100 z-20 ' />
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
                            </div>
                          ))}
                        </CardBody>
                      </Card> 
                    </Tab>
                  </Tabs>
                </div>  
            </div>
      </div>
    </section>
  )
}

export default Projects