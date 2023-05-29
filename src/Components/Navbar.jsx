import React from "react"
import '../index.css'

export default function Navbar() {
    return (
        <div className="mb-[20px]">
            <div className="pl-[20px] h-[45px] flex items-center">
                <img 
                    className="w-[100px]" 
                    src="/hofma-masonry-low-resolution-logo-color-on-transparent-background.png"
                    />
            </div>
            <hr className="h-[1px] bg-[#363636] border-0"/>
        </div>
    )
}