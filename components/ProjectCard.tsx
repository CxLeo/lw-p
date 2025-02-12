import Image from 'next/image'
import React from 'react'

type Tech ={
    label:string,
    color:string
}


interface ProjectCardProp{
    techs:Tech[],
    title:string,
    description:string,
    url:string,
    link:string
    index:number
}

function ProjectCard({techs,title,description,url,link,index}:ProjectCardProp) {
    const bg = techs.map((tech,idx)=>{ return tech.color});
  return (
    <div className='w-full flex flex-col lg:space-y-4 space-y-2'>
        {/* cover */}
        <a href={link} target='_blank' className='w-full aoverflow-hidden relative rounded-[4px] bg-[#F3F3F3]'>
            <Image src={url} alt={title} width={900} height={600} className='object-cover w-full'/>
            <div className="absolute inset-0 bg-[#F3F3F3] opacity-95 transition-opacity duration-500 hover:opacity-0"></div>
            <div className='absolute lg:top-[38px] lg:left-[38px] top-[15px] left-[15px] bg-transparent flex flex-col'>
                <h6 className='text-paragraph font-formula lg:text-[18px] text-[13px] leading-normal'>proj</h6>
                <p className='text-primary font-supply lg:text-[240px] text-[120px] leading-none'>{index}</p>
            </div>
        </a>
        {/* techs */}
        <div className='flex flex-row space-x-1'>
            {
                techs.map((tech,idx) =>(
                    <div key={idx+tech.label} className={`p-[10px] flex justify-center items-center rounded-[4px] ${bg[idx]} text-paragraph font-formula text-[18px] leading-normal`}>
                        {tech.label}
                    </div>
                ))
            }
        </div>
        {/* text */}
        <h2 className='text-paragraph font-formula text-[22px] leading-normal'>
            {title}
        </h2>
        <p className='text-paragraph font-formula text-[18px] leading-normal'>
            {description}
        </p>
    </div>
  )
}

export default ProjectCard