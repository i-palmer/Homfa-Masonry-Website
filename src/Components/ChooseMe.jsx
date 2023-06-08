import '../index.css'
import React, { useState, useEffect } from "react";


export default function ChooseMe() {

        const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);
      
        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 639);
          };
      
          window.addEventListener("resize", handleResize);
      
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }, []);
        
    return (
        <div className="pl-[45px] pr-[15px]">
            <h1 className="text-[32px] font-semibold mt-[40px] mb-[40px] sm:text-[45px]">Why Choose Me</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div className="mb-[30px] mr-[30px]">
                    <h4 className="text-[25px] font-semibold mb-[10px] sm:text-[29px] font-[625] mb-[20px]">Premium Quality</h4>
                    <p className="text-[15px] text-[#232323] font-medium mb-[7.5px] ml-[5px] sm:text-[17px]">
                        I often tell my customers that when doing their projects, I am working to give them 
                        the best quality possible, so if I am happy with the outcome, then they will be also.
                    </p>
                    {isMobile && <hr className="bg-[#BBBBBB] h-[2px] ml-[12px]"></hr>}
                </div>
                <div className="mb-[30px] mr-[30px]">
                    <h4 className="text-[25px] font-semibold mb-[10px] sm:text-[29px] font-[625] mb-[20px]">Years of Experience</h4>
                    <p className="text-[15px] text-[#232323] font-medium mb-[7.5px] ml-[5px] sm:text-[17px]">
                        I have forty-three years of experience and have done almost everything you can 
                        do in my trade.
                    </p>
                    {isMobile && <hr className="bg-[#BBBBBB] h-[2px] ml-[12px]"></hr>}
                </div>
                <div className="mb-[30px] mr-[30px]">
                    <h4 className="text-[25px] font-semibold mb-[10px] sm:text-[29px] font-[625] mb-[20px]">Original Work</h4>
                    <p className="text-[15px] text-[#232323] font-medium mb-[7.5px] ml-[5px] sm:text-[17px]">
                        I personally do all the work and never sub-contract out your job.
                    </p>
                    {isMobile && <hr className="bg-[#BBBBBB] h-[2px] ml-[12px]"></hr>}
                </div>
                <div className="mb-[30px] mr-[30px]">
                    <h4 className="text-[25px] font-semibold mb-[10px] sm:text-[29px] font-[625] mb-[20px]">Custom Design</h4>
                    <p className="text-[15px] text-[#232323] font-medium mb-[7.5px] ml-[5px] sm:text-[17px]">
                        I will be there with you every step of the way to assure 
                        that your project looks amazing.
                    </p>
                    {isMobile && <hr className="bg-[#BBBBBB] h-[2px] ml-[12px]"></hr>}
                </div>
            </div>
        </div>
    )
}