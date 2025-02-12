'use client'
import React, { useEffect, useState } from 'react'
import NavItem from './NavItem'

function TopNav() {
    const items = [
        {
            label:'Home',
            link:'/#home'
        },
        {
            label:'Info',
            link:'/#info'
        },
        {
            label:'Experience',
            link:'/#experience'
        },
        {
            label:'Skills',
            link:'/#skills'
        },
        {
            label:'Projects',
            link:'/#projects'
        },
        {
            label:'Contact',
            link:'/#contact'
        }

    ]

    const [width, setWidth] = useState(1440);
    const [active, setActive] = useState([true,false,false,false,false,false]);
    
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
        const handleScroll = ()=>{
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY;

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY;
                const sectionBottom = sectionTop + rect.height;

                // Check if the scroll position is inside the section
                if (scrollPosition+4 >= sectionTop && scrollPosition+4 <= sectionBottom) {
                const newActiveState = Array(sections.length).fill(false);
                newActiveState[index] = true;
                setActive(newActiveState);
                }
            });
        };

        window.addEventListener('scroll',handleScroll)
    
        // Initial window size
        handleResize();
    
        // Add event listener for resize
        window.addEventListener('resize', handleResize);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    //   lg:w-[49.24%] lg:ml-[25.38%] xl:w-[49%] xl:ml-[25.5%]
    const wid = width>640? `${(width-60)/2+20}px` : '100%';
    const ml = width>640 ? `${(width-60)/4+20}px` : "0px";

  return (
    <div className='mx-[25px] lg:mx-[60px] xl:mx-[150px] sticky top-4 z-[15] lg:-mt-[40px] -mt-[80px]'>
        <nav style={{width:wid, marginLeft:ml}} className=' lg:flex grid grid-cols-3 grid-rows-2 bg-[#F3F3F3] rounded-[4px]   justify-between'>
            {
                items.map((item,idx) => (
                    <div key={idx}>
                        <NavItem item={item} active={active[idx]}/>
                    </div>
                ))
            }
        </nav>
    </div>
  )
}

export default TopNav