import React, { useState } from "react";
import { contactType } from "./Contact";
import { AnimatePresence, motion } from "motion/react";

function ContactCard({ info }: { info: contactType }) {
    const [hovered, setHovered] = useState(false);
    return (
        <>
            <motion.a
                href={info.href}
                target="_blank"
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                initial={{ opacity: 0, y: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: info.id / 6, type:'spring' }}
                viewport={{ once: true }}
                className={`aspect-square rounded-full ${info.bgColor} border-[1px] border-dashed border-[#434343] flex flex-col justify-center items-center`}
            >
                <AnimatePresence>
                    {hovered ? (
                        <motion.p
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: -24, opacity: 1 }}
                            exit={{ y: 0, opacity: 0 }}
                            className="text-[20px] font-formula -mt-3"
                        >
                            {info.label}
                        </motion.p>
                    ) : (
                        <p className="-mt-3 opacity-0 text-[20px] font-formula">
                            {info.label}
                        </p>
                    )}
                </AnimatePresence>
                {info.icon}
            </motion.a>
        </>
    );
}

export default ContactCard;
