"use client"
import menuItems from "@/types/menuitems"
import ContactUs from "./contactus"
import { SocialIcon } from "react-social-icons"
import { Turn } from "hamburger-react";
import { useState } from "react";

export  function DesktopMenu () {
    return (
        <div className="flex flex-row gap-4 items-center max-md:hidden">
            {menuItems.map((item, index) => (
                <a key={index} href={item.href} className="mr-[20px]">
                    {item.label}
                </a>
            ))}
            <SocialIcon url="https://github.com" bgColor="black" className="!w-10 !h-10"/>
            <SocialIcon url="https://linkedin.com" bgColor="black" className="!w-10 !h-10"/>
            <ContactUs/>
        </div>
    )
}

export default function Menu () {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-row gap-4 items-center ">
    
            <div className={`flex flex-col md:flex-row items-center border fixed md:static z-0 bg-white right-0 -translate-y-[-95px] w-[110px] md:w-auto md:border-none transition-transform md:transform-none ${isOpen ? '' :'translate-x-[130%]'}`}>
            {menuItems.map((item, index) => (
                        <a key={index} href={item.href} className="rounded-lg w-[100px] my-[5px] mx-[px] text-center border md:border-none">
                            {item.label}
                        </a>
                    ))}
            </div>
        
            <SocialIcon url="https://github.com" bgColor="black" className="!w-10 !h-10"/>
            <SocialIcon url="https://linkedin.com" bgColor="black" className="!w-10 !h-10"/>
            <ContactUs/>
            <button onClick={() => setIsOpen(!isOpen)} className="relative z-10 md:hidden">
                <Turn toggled={isOpen} onToggle={setIsOpen} size={22}/>
            
            </button>
        </div>
    )
}