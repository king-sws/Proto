'use client'
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import {Briefcase, Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, Sparkles, User2 } from 'lucide-react'

const infoData = [{
    icon : <User2 size={20} />,
    text : 'KiNG SwS'
},
{
    icon : <PhoneCall size={20} />,
    text : '+212 611 852 414'
},
{
    icon : <Calendar size={20} />,
    text : '03 Nov 2004'
},
{
    icon : <MailIcon size={20} />,
    text : 'odon66674@gmail.com'
},
{
    icon : <GraduationCap size={20} />,
    text : 'Web Devoloper '
},
{
    icon : <HomeIcon size={20} />,
    text : '17 Street Mohammed V, SF, MR'
},
]
const SkillData =[{
    title : 'skills',
    data : [
        {
            name : 'HTML , CSS, Javacript'
        },
        {
            tit : 'Font-end Development'
        },
        {
            name : 'Jqury, BotStrap, Tailwind css '
        },
        {
            tit : 'Library'
        },
        {
            name : 'React Js , Next JS'
        },
        {
            tit : 'Fram Work'
        },
    ]
}]
const quaD =[
{
    title : 'experience',
    data : [
        {
            company : 'Tech Innovatory',
            role : 'Software Engineer',
            years : '2022 - 2023'
        }
    ]
},
{
    title : "education",
    data : [
        {
            University : 'Cady Iyad',
            role : 'Master',
            years : '2020 - 2022'
        }
    ]
},

]
const image =[{
    title : 'tools',
    data : [
        {
            imgPath : './about/vscode.svg'
        },
        {
            imgPath : './about/figma.svg'
        },
        {
            imgPath : './about/notion.svg'
        },
        {
            imgPath : './about/wordpress.svg'
        },
    ]
}]
export default function BasicTabs(){
    const getData = (arr:string , title : string) => {
        return arr.find((item:string) => item.title === title )
    }
  return (
    <div className="flex w-full flex-col max-w[500px] ">
        <Tabs aria-label="Options" className='lg:border-[1px] md:border-[1px]  md:rounded-full lg:rounded-full max-w-[600px] flex flex-col justify-center items-center w-full m-auto ' >        <Tab key="photos" title="Personal Info" className='flex justify-center outline-none w-full ' >
            <Card className="w-full" >
            <div className='flex flex-col mb-6 gap-4' >
            <CardBody className='border-b-2' >
            <h3 className='font-semibold text-3xl my-2 ' > Unmatched Service Qyality for Over 10 Years </h3>
            <p className='text-[14px] text-slate-500 max-w-[420px] mb-4 ' >I specialize in crafting inuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences</p>
            <div  className="grid lg:grid-cols-2 gap-4 mb-12: ">
                {infoData.map((links , i)=>(
                <div key={i} className='flex gap-4' >
                    <p className='text-[var(--main)] ' >{links.icon}</p>
                    <p> {links.text} </p>
                </div>
                ))}
            </div>
            <div className="flex mt-8 flex-col items-center">
                <p className="text-[var(--main)] capitalize " >language Skill </p>
            </div>
            </CardBody>
            <div className="flex flex-col items-center">
                <p className="text-slate-600 " >English, Arabic, French</p>
            </div>
            </div>
        </Card>  
          </Tab>
        <Tab key="music" title="Qualifications">
        <Card>
            <div className="">
                <p className="font-semibold text-3xl mt-6 mb-4 " >My Awesome Journey</p>
            </div>
            <CardBody>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 lg:gap-x-12">
                <div>
                    <div className="flex items-center gap-x-2 text-[20px] text-[var(--main)] ">
                    <GraduationCap  />
                    <h4 className="capitalize" >
                        {getData(quaD, 'education').title}
                    </h4>
                </div>
                <div className="flex flex-col mt-3" >
                    {getData(quaD, 'education').data.map(
                        (item, i) => {
                            const { University, role , years} = item
                            return (
                                <div key={i} className="flex group gap-x-8 " >
                                    <div className="h-[84px] w-[1px] bg-slate-400 relative ml-2 ">
                                        <div className="w-[11px] h-[11px] rounded-full bg-[var(--main)] absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500  "></div>
                                    </div>
                                    <div>
                                        <div className="text-slate-700 mb-1 font-semibold tracking-wide"> {University} </div>
                                        <div className="text-slate-700 mb-1 tracking-wide"> {role} </div>
                                        <div className="text-slate-700 mb-1  tracking-wide"> {years} </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                    
                </div>
                </div>
                
                <div>
                    <div className="flex items-center gap-x-2 text-[20px] text-[var(--main)] ">
                    <Briefcase />
                    <h4 className="capitalize" >
                        {getData(quaD, 'experience').title}
                    </h4>
                </div>
                <div className="flex flex-col mt-3" >
                    {getData(quaD, 'experience').data.map(
                        (item, i) => {
                            const {company , role , years} = item
                            return (
                                <div key={i} className="flex group gap-x-8 " >
                                    <div className="h-[84px] w-[1px] bg-slate-400 relative ml-2 ">
                                        <div className="w-[11px] h-[11px] rounded-full bg-[var(--main)] absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500  "></div>
                                    </div>
                                    <div>
                                        <div className="text-slate-700 mb-1 font-semibold tracking-wide"> {company} </div>
                                        <div className="text-slate-700 mb-1  tracking-wide"> {role} </div>
                                        <div className="text-slate-500 mb-1  tracking-wide"> {years} </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                    
                </div>
                </div>
            </div>
                
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Skills">
          <Card>
            <div className="">
                <h3 className="text-3xl font-semibold mt-6 my-4" >Tools I Use Everyday</h3>
            </div>
            <CardBody>
                <div className="">
                    <div className="border-b-2">
                    {SkillData.map((link , i)=>(
                        <p className="mb-2 font-medium text-xl " key={i} > {link.title} </p>
                    ))}
                    </div>
                    {getData(SkillData , 'skills').data.map((item , i)=>(
                        <div className="mb-1 mt-2 " key={i} >
                            <p className="text-[16px] font-medium " > {item.tit} </p>
                            <p className="text-[15px] font-meduim " > {item.name} </p>
                        </div>
                    ))}
                </div>
                <div className="border-b-2 mt-4 flex justify-center text-[17px] font-bold text-[var(--main)] ">
                <p>Tools</p>
                </div>
                <div className="flex text-slate-600 justify-between mt-5 flex-row">
                    <img src="./about/figma.svg" alt="" color="black" className="w-[40px] lg:w-[90px] " />
                    <img src="./about/notion.svg" alt="" className="w-[40px] lg:w-[90px] " />
                    <img src="./about/vscode.svg" alt="" className="w-[40px] lg:w-[90px] " />
                    <img src="./about/wordpress.svg" alt="" className="w-[40px] lg:w-[90px] " />
                </div>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}
