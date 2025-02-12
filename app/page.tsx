"use client"
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [width, setWidth] = useState(1440);
  const contentRef = useRef<HTMLDivElement>(null); // Creating a ref for the div
  const [contentHeight, setContentHeight] = useState(0); 

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

      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight+contentRef.current.offsetTop); // Get the height of the content div
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
  // xl:h-[710vh] lg:h-[665vh] h-[820vh]
  return (
    <main className="w-screen lg:px-[60px] xl:px-[150px] px-[25px]">
      {/* background grid */}
      <div style={{height:contentHeight}} className="pb-[-10px] absolute px-[25px] lg:px-[60px] xl:px-[150px] -mt-[1px] w-screen  top-0 left-0 grid grid-row lg:grid-cols-4 grid-cols-1 gap-[20px] overflow-y-hidden">
        <div className="custom-dashed-border h-full"></div>
        <div className="custom-dashed-border h-full"></div>
        <div className="custom-dashed-border h-full"></div>
        <div className="custom-dashed-border h-full lg:bg-primary"></div>
      </div>
      {/* Content */}
      <div id="content" ref={contentRef} className="relative w-full lg:mx-0 mx-auto overflow-hidden">
        <Hero/>
        <Intro width={width}/>
        <Experience width={width}/>
        <Skill width={width}/>
        <Project width={width}/>
        <Contact width={width}/>
        
      </div>
    </main>
  );
}
