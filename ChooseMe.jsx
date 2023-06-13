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
            <h1 className="text-[32px] font-semibold mt-[40px] mb-[40px] sm:text-[45px] md:text-[55px] mdLg:text-[60px] lg:text-[65px]">Why Choose Me</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4">
                <div className="mb-[30px] mr-[30px] 2xl:mr-[40px]">
                    <h4 className="text-[25px] font-semibold mb-[10px] sm:text-[29px] sm:font-[625] sm:mb-[20px] md:text-[37px] mdLg:text-[40px]">Premium Quality</h4>
                    <p className="text-[15px] text-[#343434] font-medium mb-[7.5px] ml-[5px] sm:text-[17px] md:text-[22px] mdLg:text-[25px] lg:text-[28px]">
                        I often tell my customers that when doing their projects, I am working to give them 
                        the best quality possible, so if I am happy with the outcome, then they will be also.
                    </p>
                    {isMobile && <hr className="bg-[#BBBBBB] h-[2px] ml-[12px]"></hr>}
                </div>
                <div className="mb-[30px] mr-[30px] 2xl:mr-[40px]">
                    <h4 className="text-[25px] font-semibold mb-[10px] sm:text-[29px] sm:font-[625] sm:mb-[20px] md:text-[37px] mdLg:text-[40px]">Years of Experience</h4>
                    <p className="text-[15px] text-[#343434] font-medium mb-[7.5px] ml-[5px] sm:text-[17px] md:text-[22px] mdLg:tex-g[25px] lg:text-[28px]">
                        I have forty-three years of experience and have done almost everything you can 
                        do in my trade.
                    </p>
                    {isMobile && <hr className="bg-[#BBBBBB] h-[2px] ml-[12px]"></hr>}
                </div>
                <div className="mb-[30px] mr-[30px] 2xl:mr-[40px]">
                    <h4 className="text-[25px] font-semibold mb-[10px] sm:text-[29px] sm:font-[625] sm:mb-[20px] md:text-[37px] mdLg:text-[40px]">Original Work</h4>
                    <p className="text-[15px] text-[#343434] font-medium mb-[7.5px] ml-[5px] sm:text-[17px] md:text-[22px] mdLg:text-[25px] lg:text-[28px]">
                        I personally do all the work and never sub-contract out your job.
                    </p>
                    {isMobile && <hr className="bg-[#BBBBBB] h-[2px] ml-[12px]"></hr>}
                </div>
                <div className="mb-[30px] mr-[30px] 2xl:mr-[40px]">
                    <h4 className="text-[25px] font-semibold mb-[10px] sm:text-[29px] sm:font-[625] sm:mb-[20px] md:text-[37px] mdLg:text-[40px]">Custom Design</h4>
                    <p className="text-[15px] text-[#343434] font-medium mb-[7.5px] ml-[5px] sm:text-[17px] md:text-[22px] mdLg:text-[25px] lg:text-[28px]">
                        I will be there with you every step of the way to assure 
                        that your project looks amazing.
                    </p>
                    {isMobile && <hr className="bg-[#BBBBBB] h-[2px] ml-[12px]"></hr>}
                </div>
            </div>
        </div>
    )
}