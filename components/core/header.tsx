import SlideMenu from "./slidemenu"
import Image from "next/image"
import LogoTest from "@/public/logo.svg"

export default function Header() {
    return (
        <div className="flex flex-row h-[50px] w-screen border-b items-center px-[10px] z-50 fixed">
            <div className="flex w-1/2 justify-start items-center">
                <Image src={LogoTest} alt="Logo"/>
                <p>BitWebs</p>
            </div>
            <div className="flex w-1/2 justify-end">
                <SlideMenu/>
            </div>
        </div>
    )
}