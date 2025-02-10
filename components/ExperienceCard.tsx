'use client'
import { motion } from 'motion/react';
import React from 'react';

interface ExperienceCardProps {
    title: string;
    company: string;
    time: string;
    techs: string[];
    cardWidth:string | number
}

const ExperienceCard= ({ title, company, time, techs, cardWidth }:ExperienceCardProps) => {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        className=" flex lg:flex-row flex-col lg:space-x-5">
            <div className=' uppercase lg:max-w-[170px] text-primary text-right font-supply text-[24px] font-medium leading-normal'>
                {`/*`+time+'*/'}
            </div>
            <div style={{ minWidth: cardWidth }} className={`bg-[#89FDA2] lg:py-8 lg:pl-10 py-4 pl-5 text-[#00791A] font-supply lg:space-y-5 space-y-3`}>
                <p className='lg:text-[48px] lg:leading-none text-[30px]'>{title}</p>
                <div className='flex flex-col'>
                    {
                        techs.map((tech,idx)=> (
                            <p key={idx} className='font-formula lg:text-[24px] leading-normal'>{tech}</p>
                        ))
                    }
                </div>
                <div className='font-formula lg:text-[24px] leading-normal'>
                    {company}
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceCard;