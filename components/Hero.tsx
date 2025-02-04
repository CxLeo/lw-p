import Image from 'next/image'
import React from 'react'

const ArrowRight = () => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0.929813V5.20583C1.5 6.30232 1.81733 7.23816 2.452 8.01334C3.0865 8.78872 3.8525 9.17642 4.75 9.17642H14.127L10.277 4.4728L11.3463 3.18541L17 10.0927L11.3463 17L10.277 15.7126L14.127 11.009H4.75C3.43717 11.009 2.31733 10.4427 1.3905 9.31019C0.463501 8.17786 0 6.80974 0 5.20583V0.929813H1.5Z" fill="white"/>
        </svg>        
    )
}

function Hero() {
  return (
    <div className='h-screen lg:pt-[185px] pt-[100px] w-full'>
        <div>
            <div className='lg:max-w-[75%] flex flex-col'>
                {/* LHS */}
                <div className='flex flex-row space-x-2'>
                    <h2 className='text-paragraph font-formula text-[18px] leading-[21.6px]'>Hi, I am</h2>
                    <div>
                        <Image src='/images/selfile.jpg' width={419} height={419} alt='Leo Wang' className='w-[50px] -mt-[20px] aspect-square rounded-xl '/>
                    </div>
                </div>
                <h1 className='mt-[39px] text-primary font-supply lg:text-[160px] lg:leading-none text-[53px] leading-normal'>{'{'}Leo Wang{'}'}</h1>
                <p className='mt-[56px] text-paragraph font-formula lg:font-[18px] lg:leading-[23px] lg:max-w-[516px]'>Crafting modern, responsive, and user-focused web experiences.</p>
                <button className='bg-primary mt-[35px] h-[54px] lg:max-w-[31.6%] w-full '>
                    <div className='w-full h-full text-left px-[18px] pt-[18px] text-white font-formula lg:text-[18px] leading-[21px] flex flex-row justify-between'>
                        <p>CTA</p>
                        <ArrowRight/>
                    </div>
                </button>
            </div>

            <div className='lg:max-w-[25%]'>
                {/* RHS Clock */}
            </div>
        </div>
    </div>
  )
}

export default Hero