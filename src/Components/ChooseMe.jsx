import '../index.css'
import React from "react"

export default function ChooseMe() {
    return (
        <div className="px-[45px]">
            <h1 className="text-[25px] font-medium mt-[40px] mb-[40px]">Why Choose Me</h1>
            <div className=".border">
            <div className="flex flex-col md:flex-row">
                <div className="mb-[30px]">
                    <h4 className="text-[20px] font-semibold mb-[10px]">Premium Quality</h4>
                    <p className="text-[12px] text-[#232323] mb-[7.5px] ml-[5px]">
                        I often tell my customers that when doing their projects, I am working to give them 
                        the best quality possible, so if I am happy with the outcome, then they will be also.
                    </p>
                    <hr className="w-[170px] ml-[12px]"></hr>
                </div>
                <div className="mb-[30px]">
                    <h4 className="text-[20px] font-semibold mb-[10px]">Years of Experience</h4>
                    <p className="text-[12px] text-[#232323] mb-[7.5px] ml-[5px]">
                        I have forty-three years of experience and have done almost everything you can 
                        do in my trade.
                    </p>
                    <hr className="w-[170px] ml-[12px]"></hr>
                </div>
                <div className="mb-[30px]">
                    <h4 className="text-[20px] font-semibold mb-[10px]">Original Work</h4>
                    <p className="text-[12px] text-[#232323] mb-[7.5px] ml-[5px]">
                        I personally do all the work and never sub-contract out your job.
                    </p>
                    <hr className="w-[170px] ml-[12px]"></hr>
                </div>
                <div className="mb-[30px]">
                    <h4 className="text-[20px] font-semibold mb-[10px]">Custom Design</h4>
                    <p className="text-[12px] text-[#232323] mb-[7.5px] ml-[5px]">
                        I will be there with you every step of the way to assure 
                        that your project looks amazing.
                    </p>
                    <hr className="w-[170px] ml-[12px]"></hr>
                </div>
            </div>
            </div>
        </div>
    )
}