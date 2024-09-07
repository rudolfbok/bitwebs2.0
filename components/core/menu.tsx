"use client"
import ContactUs from "./contactus"
import { SocialIcon } from "react-social-icons"
import { Turn } from "hamburger-react";
import { useState } from "react";
import { useEffect } from "react";

const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Second', href: '#' },
    { label: 'Third', href: '#' }
]

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="flex flex-row gap-4 items-center ">
            <div className={`
                flex
                flex-col 
                justify-start 
                max-md:pt-[50px] 
                md:flex-row 
                items-center 
                fixed
                gap-4 
                md:static z-0 
                text-white 
                max-md:bg-purple 
                right-0 
                -translate-y-[-95px] 
                w-[100vw] 
                h-[100%] 
                md:w-auto 
                md:border-none 
                transition-[transform,opacity]
                duration-1000
                md:transform-none ${isOpen ? 'opacity-100' : 'opacity-0'} 
                top-[-40px]
                `}>
                {menuItems.map((item, index) => (
                    <a key={index} href={item.href} className="rounded-lg max-md:w-[150px] w-[80px] my-[5px] mx-[px] text-center border md:border-none">
                        {item.label}
                    </a>
                ))}
                <div className="flex flex-row gap-4">
                    <SocialIcon url="https://github.com" bgColor="#8E44AD" className="!w-10 !h-10 border-2 rounded-full" />
                    <SocialIcon url="https://linkedin.com" bgColor="#8E44AD" className="!w-10 !h-10 border-2 rounded-full" />
                </div>
            </div>

            <div className="relative z-10 md:hidden">
                <Turn toggled={isOpen} onToggle={setIsOpen} color="white" size={22} />
            </div>
        </div>
    )
}

export function DesktopMenu() {
    return (
        <div className="flex flex-row gap-4 items-center max-md:hidden">
            {menuItems.map((item, index) => (
                <a key={index} href={item.href} className="mr-[20px]">
                    {item.label}
                </a>
            ))}
            <SocialIcon url="https://github.com" bgColor="black" className="!w-10 !h-10" />
            <SocialIcon url="https://linkedin.com" bgColor="black" className="!w-10 !h-10" />
            <ContactUs />
        </div>
    )
}