"use client";
import { motion } from "motion/react";
import React from "react";

function Intro({ width }: { width: number }) {
  const ml = width>640 ? `${width / 4 + 6}px` : "0px";
  const cardWidth = width>640 ? `${(width-20) / 2 }px` : "100%";

  return (
    <section id="intro" className=" w-full xl:pt-[110px] lg:pt-[60px] pt-[120px]">
      <div
        className="flex flex-col"
        style={{
          marginLeft: ml,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-primary font-supply lg:text-[96px] text-[64px] leading-none"
        >
          {"{"}Info{"}"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="xl:mt-[31px] mt-[20px] text-paragraph font-formula lg:font-[18px] lg:leading-[23px] lg:max-w-[650px]"
        >
          {`I’m a skilled web/software developer with a passion for solving complex problems and delivering tailored solutions. With experience in building optimized websites, I also excel in leadership, helping teams reach their full potential. Additionally, I enjoy designing system architectures and collaborating with others to find the most efficient solutions for each project.`}
        </motion.p>
      </div>

      <motion.div 
      initial={{ opacity: 0, y: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="xl:mt-[80px] mt-[30px] flex lg:flex-row flex-col w-full lg:gap-[20px]">
        <div style={{maxWidth:cardWidth}} className="flex-1 flex flex-col space-y-[13px] lg:min-h-[483px] min-h-[300px] bg-radial-green lg:pl-[70px] lg:pr-[48px] lg:pt-[88px] px-4 py-4">
            <h3 className="text-paragraph font-formulaMedium lg:text-[18px] lg:leading-tight text-[15px] ">Brief</h3>
            <p className="text-paragraph font-formula lg:text-[36px] lg:leading-tight text-[20px]">
            Built websites with Next.js and Node.js, experienced in cloud services and infrastructure like AWS and Docker for efficient deployment and performance.
            </p>
        </div>

        <div className="flex-1 lg:min-h-[483px] min-h-[300px] bg-[#F3F3F3] flex flex-col justify-center items-center py-10">
            <h1 className="text-primary font-supply lg:text-[240px] text-[120px] leading-none">1.5</h1>
            <h3 className="text-paragraph font-formula lg:text-[18px] text-[16px] lg:leading-normal">Exp</h3>
        </div>

      </motion.div>
    </section>
  );
}

export default Intro;
