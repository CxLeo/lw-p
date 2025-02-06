"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

export type NavItemProp = {
    label: string;
    link: string;
};

function NavItem({ item, active }: { item: NavItemProp; active: boolean }) {
    return (
        <div className="flex flex-col">
            <motion.a
                initial={{ y:0}}
                whileHover={{ y:-2 }}
                transition={{
                    type: "tween",
                    duration: "0.1",
                    ease: "easeInOut",
                }}
                href={item.link}
                className={` text-center pb-[8px] pt-[12px] min-[1400px]:px-[25px] min-[1200px]:px-[17px] px-[25px] font-normal text-paragraph font-supply leading-none tracking-[-0.48px] text-[16px] text-lg ${
                    active ? "bg-[#89FDA2] border-[1px] border-dashed border-[#434343] " : ""
                }`}
            >
                <p>{item.label}</p>
            </motion.a>
        </div>
    );
}

export default NavItem;
