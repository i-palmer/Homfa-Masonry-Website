import React from "react"
import '../index.css'

export default function Navbar() {
    return (
        <div className="mb-[75px]">
            <div className="pl-[40px] h-[75px] flex items-center">
                <img 
                    className="w-[300px]" 
                    src="Images\hofma-masonry-low-resolution-logo-color-on-transparent-background.png"
                    />
                {/* <p className="text-gray-500 text-[FAF9F6]">CLASSIC BRICK, PAVERS, AND TILE</p> */}
            </div>
            <hr className="h-[1px] bg-[#363636] border-0"/>
        </div>
    )
}