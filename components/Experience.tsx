import { motion } from "motion/react";
import React from "react";
import ExperienceCard from "./ExperienceCard";

const exps = [
    {
        company:"DMSolving Cooperation",
        title:"Full Stack Developer",
        techs: ["/ Next.js","/ Express+Node.js" ,"/ Redis", "/ PostgreSQL","/ Redux","/ Docker"],
        time:"Sep 2023 - Present"
    },
    {
        company:"ID Cosmetic Clinic",
        title:"Web Developer",
        techs:["/ React.js","/ Sanity","/ Redux","/ GatsbyJS",'/','/'],
        time:"June 2023 - Sep 2023"
    },
    {
        company:"Freelancer",
        title:"Backend Developer",
        techs:["/ Spring Boot","/ JDBC","/ AWS RDS",'/','/','/'],
        time:"Oct 2022 - Feb 2023"
    }
]

function Experience({ width }: { width: number }) {
    const ml = width > 640 ? `${width / 4 + 6}px` : "0px";
    const cardWidth = width > 640 ? (width-60)/2+20: "100%";
    const mr = width > 640 ? `${(width-60)/4+20}px` : "0px";
    return (
        <section
            id="experience"
            className=" w-full xl:pt-[110px] lg:pt-[80px] pt-[120px] pb-[50px]"
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
                    className="text-primary font-supply lg:text-[96px] text-[40px] leading-none"
                >
                    {"/*"}Experience{"*/"}
                </motion.h2>
            </div>

            <div style={{
                marginRight:mr
            }} className="lg:mt-[80px] mt-5 flex flex-col space-y-14 lg:items-end ">
                {
                    exps.map((exp,idx)=>(
                        <ExperienceCard key={idx+exp.company} time={exp.time} company={exp.company} techs={exp.techs} title={exp.title} cardWidth={cardWidth} />
                    ))
                }

            </div>

            
        </section>
    );
}

export default Experience;
