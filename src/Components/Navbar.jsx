import React from "react"
import '../index.css'

export default function Navbar() {
    return (
        <div className="mb-[20px]">
            <div className="px-[20px] h-[80px] grid grid-cols-12 flex items-center sm:h-[110px] md:h-[130px] lg:h-[150px] xl:h-[170px] 2xl:h-[200px]">
                <img 
                    className="col-span-6 sm:col-span-5" 
                    src="/hofma-masonry-low-resolution-logo-color-on-transparent-background.png"
                    />
            </div>
            <hr className="h-[1px] bg-[#363636] border-0"/>
        </div>
    )
}

// 'sm': '640px',

//       'md': '768px',

//       'lg': '1024px',

//       'xl': '1280px',

//       '2xl': '1536px',