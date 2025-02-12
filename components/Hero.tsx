'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const ArrowRight = () => {
    return (
        <svg className="w-[20px] h-[20px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 23 23">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
        </svg>
    )
}

function Hero() {
    const [isSelfileHovered, setSelfileHovered] = React.useState(false);

  return (
    <section id="home" className='xl:pt-[255px] lg:pt-[205px] pt-[150px] pb-[180px] w-full'>
        <div>
            <div className='lg:max-w-[75%] flex flex-col'>
                {/* LHS */}
                <div className='flex lg:flex-row flex-col lg:space-x-2'>
                    <h2 className='text-paragraph font-formula text-[18px] leading-[21.6px]'>Hi, I am</h2>
                    <motion.div
                        onHoverStart={() => setSelfileHovered(true)}
                        onHoverEnd={() => setSelfileHovered(false)}
                        initial={{ scale: 1,x:0,y:0 }}
                        whileHover={{ scale: 1.3, x: 5, y: -5 }}
                        className='lg:w-[60px] lg:h-[60px] lg:-mt-[25px] w-[250px] mt-[60px] lg:hover:border-[1.5px]  border-primary border-dashed '
                    >
                        <Image src='/images/selfile.jpg' width={419} height={419} alt='Leo Wang' className='lg:w-[60px] w-[250px] aspect-square rounded-2xl '/>
                    </motion.div>
                    {
                        isSelfileHovered && 
                        <motion.p 
                        initial={{ opacity: 0, x:13}}
                        animate={{ opacity: 1, x:8 }}
                        transition={{ duration: 0.2, type: 'tween', ease:"easeOut" }}
                        exit={{ opacity: 0, x:13 }}
                        className='text-primary ml-8 font-supply text-[16px] leading-none'>
                            {`<span class="you-found-it">this is the guy you're looking for</span>`}
                        </motion.p>
                    }
                </div>
                <h1 className='lg:mt-[39px] mt-0 text-primary font-supply lg:text-[160px] lg:leading-none text-[53px] leading-normal'>{'{'}Leo Wang{'}'}</h1>
                <p className='lg:mt-[56px] text-paragraph font-formula lg:font-[18px] lg:leading-[23px] lg:max-w-[512px]'>Driving innovation through code, creativity, and a passion for lifelong learning.</p>
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ translateX: 10}}
                    className='bg-primary rounded-md lg:mt-[35px] mt-[60px] h-[54px] lg:max-w-[32%] w-full '>
                    <a download="LeoWangCV.pdf" href="/Resume_LW_2025.pdf"  className='w-full h-full  text-left px-[18px] pt-[18px] text-white font-formula lg:text-[18px] leading-[21px] flex flex-row justify-between'>
                        <p>Download CV</p>
                        <ArrowRight/>
                    </a>
                </motion.button>
            </div>

            <div className='lg:max-w-[25%]'>
                {/* RHS Clock */}
            </div>
        </div>
    </section>
  )
}

export default Hero