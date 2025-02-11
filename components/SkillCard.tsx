import React from 'react';
import Image from 'next/image';

interface SkillCardProps {
    label: string;
    url: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ label, url }) => {
    return (
        <div className="w-full bg-white h-[80px] flex flex-row border-[1px] border-dashed border-black space-x-4 items-center pl-3">
            <Image src={url} width={100} height={100} alt={label} className='w-[60px] h-[60px] aspect-square rounded-2xl '/>
            <p className='flex justify-center mt-2 items-center text-lg font-supply'>{label}</p>
        </div>
    );
};

export default SkillCard;