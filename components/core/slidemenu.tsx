"use client";

import { useState } from "react"
import menuItems from "@/types/menuitems";
import Image from "next/image";
import ThreeLinesButton from "@/public/threelines.svg";

export default function SlideMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="relative block z-100">
                <Image src={ThreeLinesButton} alt="Menu" width={30} height={30} className="relative block z-100"/>
            </button>
            {isOpen && (
                <div className="flex flex-col border">
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.href} className="rounded-lg w-[100px] my-[5px] mx-[px] text-center border">
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}