import React from "react"
import GridImage from "./GridImage"

export default function AboutMe() {
    return (
        <div className="text-[#F8F8F8] pl-[20px] pb-[50px]">
            <div className="flex flex-col mr-[20px]">
                <div className="sm:grid sm:grid-cols-6 sm:grid-rows-1">
                    <h1 className="text-[35px] text-white mb-[35px] leading-[3.05rem]
                    sm:text-[50px] sm:col-start-1 sm:col-span-4 sm:mr-[35px] sm:mt-[15px] sm:leading-[65px]">
                        I am Larry Hofma and have been a mason since 1980.
                    </h1>
                <GridImage />
                </div>
                <h1 className="mt-[50px] text-[30px] text-[#DEDEDE] sm:text-[45px]">About Me</h1>
                <p className="mt-[15px] text-[15px] text-[#999999] sm:text-[20px]">
                    I apprenticed for six years and began my business in Richmond
                    in 1986. I started in masonry because I was dissatisfied working for a phone company.
                    A friend knew this and was growing his company, so he  asked me if I wanted to learn 
                    the trade. I always liked working with my hands and had cut neighbors' lawns working 
                    outside, so masonry seemed a good fit for me. Also, I have always enjoyed working 
                    with people trying to do extra on projects to ensure a pleasurable outcome to my work.
                </p>
            </div>
        </div>
    )
}