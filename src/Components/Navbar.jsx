import React from "react"
import '../index.css'

export default function Navbar() {
    return (
        <div className="mb-[20px] sm:mb-[30px] md:mb-[40px] xl:mb-[50px] 2xl:mb-[60px]">
            <div className="px-[20px] h-[80px] grid grid-cols-12 flex items-center sm:h-[110px] md:h-[130px] lg:h-[150px] xl:h-[170px] 2xl:h-[200px]">
                <img 
                    className="col-span-6 sm:col-span-5" 
                    src="/hofma-masonry-low-resolution-logo-color-on-transparent-background.png"
                />
                <h1 className="text-white col-start-8 col-span-2 text-[10px]">Contact Me</h1>
                <h1 className="text-white col-start-11 col-span-2 text-[10px]">My Work</h1>
            </div>
            <hr className="h-[1px] bg-[#363636] border-0"/>
        </div>
    )
}