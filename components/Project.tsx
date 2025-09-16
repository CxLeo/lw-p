import { motion } from "motion/react";
import React from "react";
import ProjectCard from "./ProjectCard";

const projects=[
    {
        title:"Chat Pdf",
        description:"A full stack application in which user can chat with pdf using AI",
        techs:[],
        url:"/images/chat.png",
        link:"https://aichat-pdf.vercel.app/"
    },
    {
        title:"Portfolio Website", 
        description:"A portfolio website made for a UI/UX designer",
        techs:[],
        url:"/images/designer.png",
        // link:"https://designerfeiran.com/"
        link:"https://portfolio-kc9devklk-leos-projects-d273b717.vercel.app/"
    }
]
// "react,redux,next,framer-motion"

function Project({width}:{width:number}) {
    const ml = width > 640 ? `${width / 4 + 6}px` : "0px";
    return (
        <section
            id="projects"
            className="w-full xl:pt-[110px] lg:pt-[80px] pt-[120px] lg:pb-[120px]"
        >
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
                    {"{"}Projects{"}"}
                </motion.h2>
            </div>

            <div className="lg:mt-[60px] mt-[30px] grid grid-row lg:grid-cols-4 grid-cols-1 lg:gap-[20px] gap-[30px]">
                {
                    projects.map((project,idx)=>(
                        <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        key={idx+project.title}
                        className="lg:col-span-2"
                        >
                            <ProjectCard title={project.title} techs={project.techs} description={project.description} url={project.url} link={project.link} index={idx+1}/>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    );
}

export default Project;
