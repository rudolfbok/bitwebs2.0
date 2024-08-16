"use client";

import { useState } from "react"
import menuItems from "@/types/menuitems";
import Image from "next/image";
import { Squeeze } from "hamburger-react";
import ThreeLinesButton from "@/public/threelines.svg";

export default function SlideMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex relative items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="relative z-10">
                <Squeeze toggled={isOpen} onToggle={setIsOpen} size={22}/>
            </button>
                <div className={`flex flex-col items-center border fixed z-0 bg-white right-0 top-1/2 -translate-y-1/2 w-[110px] transition-transform ${isOpen ? '' :'translate-x-[130%]'}`}>
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.href} className="rounded-lg w-[100px] my-[5px] mx-[px] text-center border">
                            {item.label}
                        </a>
                    ))}
                    <select>
                        <option>CZ</option>
                        <option>EN</option>
                    </select>
                </div>
        </div>
    )
}