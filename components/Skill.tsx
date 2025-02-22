"use client";
import { motion } from "motion/react";
import React from "react";
import SkillCard from "./SkillCard";

const skills = [
    { label: "Java", url: "/logos/java.webp" },
    { label: "JavaScript", url: "/logos/javascript.png" },
    { label: "TypeScript", url: "/logos/typescript.png" },
    { label: "Python", url: "/logos/python.svg" },
    { label: "React.js", url: "/logos/react.png" },
    { label: "Next.js", url: "/logos/next.png" },
    { label: "Node.js", url: "/logos/node.png" },
    { label: "Redux", url: "/logos/redux.png" },
    { label: "Spring Boot", url: "/logos/springboot.png" },
    { label: "Tailwind", url: "/logos/tailwind.png" },
    { label: "CSS", url: "/logos/css.png" },
    { label: "Django", url: "/logos/django.png" },
    { label: "Sass", url: "/logos/sass.png" },
    { label: "AWS", url: "/logos/aws.png" },
    { label: "Azure", url: "/logos/azure.svg" },
    { label: "Git", url: "/logos/git.png" },
    { label: "Postgre SQL", url: "/logos/postgre.png" },
    { label: "Prisma", url: "/logos/prisma.jpg" },
];

function Skill({ width }: { width: number }) {
    const ml = width > 640 ? `${width / 4 + 6}px` : "0px";
    return (
        <section
            id="skills"
            className="w-full xl:pt-[110px] lg:pt-[80px] pt-[120px] xl:pb-[80px] lg:pb-[110px]"
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
                    {"{"}Skills{"}"}
                </motion.h2>
                {/* <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="xl:mt-[31px] mt-[20px] text-paragraph font-formula lg:font-[18px] lg:leading-[23px] lg:max-w-[650px]"
                >
                    {`Actively exploring new techs`}
                </motion.p> */}
            </div>

            <div className="grid grid-row lg:grid-cols-4 lg:mt-[80px] mt-[30px] grid-cols-1 gap-x-[20px] gap-y-[25px]">
                {
                    skills.map((skill,idx)=>(
                        <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay:idx/10, type:"spring" }}
                        viewport={{ once: true }}
                        key={idx+skill.label}>
                            <SkillCard label={skill.label} url={skill.url}/>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    );
}

export default Skill;
