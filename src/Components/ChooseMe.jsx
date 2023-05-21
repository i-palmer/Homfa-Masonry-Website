import '../index.css'
import React from "react"

export default function ChooseMe() {
    return (
        <div className="px-[45px]">
            <h1 className="text-[40px] font-medium mt-[40px] mb-[40px]">Why Choose Me</h1>
            <div className=".border">
            <div className="flex flex-col md:flex-row">
                <div>
                    <h4 className="text-[25px] font-semibold mb-[10px]">High Quality</h4>
                    <p className="text-lg text-[#232323]">
                        I often tell my customers that when doing their projects, I am working to give them 
                        the best quality possible, so if I am happy with the outcome, then they will be also.
                    </p>
                </div>
                <div>
                    <h4 className="text-[25px] font-semibold mb-[10px]">Years of Experience</h4>
                    <p className="text-lg text-[#232323]">
                        I have forty-three years of experience and have done almost everything you can 
                        do in my trade.
                    </p>
                </div>
                <div>
                    <h4 className="text-[25px] font-semibold mb-[10px]">Original Work</h4>
                    <p className="text-lg text-[#232323]">
                        I personally do all the work and never sub-contract out your job.
                    </p>
                </div>
                <div>
                    <h4 className="text-[25px] font-semibold mb-[10px]">Custom Design</h4>
                    <p className="text-lg text-[#232323]">
                        I will be there with you every step of the way to assure 
                        that your project looks amazing.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}