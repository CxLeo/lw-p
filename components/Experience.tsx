import { motion } from "motion/react";
import React from "react";

function Experience({ width }: { width: number }) {
    const ml = width > 640 ? `${width / 4 + 6}px` : "0px";
    return (
        <section
            id="experience"
            className="h-screen w-full xl:pt-[150px] lg:pt-[60px]"
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
                    {"{"}Experience{"}"}
                </motion.h2>
                
            </div>

            
        </section>
    );
}

export default Experience;
