"use client"
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import { useState, useEffect } from 'react';

export default function Home() {
  const [width, setWidth] = useState(1440);

  // Set up an effect to track window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth>1440){
        setWidth(window.innerWidth-300); // Get the current window width
      }else if (window.innerWidth>1024){
        setWidth(window.innerWidth-120); // Get the current window width
      }else{
        setWidth(window.innerWidth-50); // Get the current window width
      }
    };

    // Initial window size
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="w-screen lg:px-[60px] xl:px-[150px] px-[25px]">
      {/* background grid */}
      <div className="absolute px-[25px] lg:px-[60px] xl:px-[150px] h-[600vh] -mt-2 w-screen  top-0 left-0 grid grid-row lg:grid-cols-4 grid-cols-1 gap-[20px] overflow-y-hidden">
        <div className="custom-dashed-border h-full abg-red-400"></div>
        <div className="custom-dashed-border h-full abg-blue-400"></div>
        <div className="custom-dashed-border h-full abg-yellow-400"></div>
        <div className="custom-dashed-border h-full bg-primary"></div>
      </div>
      {/* Content */}
      <div className="relative w-full lg:mx-0 mx-auto overflow-x-hidden">
        <Hero/>
        <Intro width={width}/>
        <Experience width={width}/>
        <Contact width={width}/>
      </div>
    </main>
  );
}
