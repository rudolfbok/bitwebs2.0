import Menu from "./menu"
import Image from "next/image"
import LogoTest from "@/public/logo2.png"

export default function Header() {
    return (
        <div className="flex flex-row h-[50px] w-screen border-b border-white items-center px-[20px] z-50">
            <div className="flex w-1/2 justify-start items-center gap-2">
                <Image src={LogoTest} alt="Logo" className="max-h-7 w-auto"/>
                <p className="text-white">BitWebs</p>
            </div>
            <div className="flex w-1/2 max-md:justify-end md:justify-end">
                <Menu/>
            </div>
        </div>
    )
}