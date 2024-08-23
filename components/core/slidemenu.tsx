"use client";

import { useState } from "react"
import menuItems from "@/types/menuitems";
import { Turn } from "hamburger-react";
import ContactUs from "./contactus";
import { SocialIcon } from "react-social-icons";

export default function SlideMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex relative items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="relative z-10">
                <Turn toggled={isOpen} onToggle={setIsOpen} size={22}/>
            </button>
                <div className={`flex flex-col items-center border fixed z-0 bg-white right-0 -translate-y-[-95px] w-[110px] transition-transform ${isOpen ? '' :'translate-x-[130%]'}`}>
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.href} className="rounded-lg w-[100px] my-[5px] mx-[px] text-center border">
                            {item.label}
                        </a>
                    ))}
                    <div className="flex flex-row">
                        <SocialIcon url="https://github.com" bgColor="black"/>
                        <SocialIcon url="https://linkedin.com" bgColor="black"/>
                    </div>
                    <ContactUs/>
                    <select>
                        <option>CZ</option>
                        <option>EN</option>
                    </select>
                </div>
        </div>
    )
}