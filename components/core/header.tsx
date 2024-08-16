import SlideMenu from "./slidemenu"
import Image from "next/image"
import LogoTest from "@/public/logo.svg"

export default function Header() {
    return (
        <div className="flex flex-row h-[50px] w-screen border-b items-center px-[10px] z-50">
            <div className="flex w-1/2 justify-start items-center gap-2">
                <Image src={LogoTest} alt="Logo" className="max-h-7 w-auto"/>
                <p>BitWebs</p>
            </div>
            <div className="flex w-1/2 justify-end">
                <SlideMenu/>
            </div>
        </div>
    )
}