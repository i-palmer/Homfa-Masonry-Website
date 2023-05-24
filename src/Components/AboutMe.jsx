import React from "react"

export default function AboutMe() {
    return (
        <div className="text-[#F8F8F8] pl-[20px] pb-[50px]">
            <div className="flex flex-col lg:flex-row">
                <div className="mr-[20px]">
                    <h1 className="text-[30px] text-white mb-[35px] leading-9">
                        I am Larry Hofma and have been a mason since 1980.
                    </h1>
                    <img className=" rounded-t-[20px]"
                    src="../Images\IMG_20151023_164855637.jpg"/>
                    <h1 className="mt-[50px] text-[27px] text-[#DEDEDE]">About Me</h1>
                    <p className="mt-[15px] text-[12px] text-[#999999]">
                        I apprenticed for six years and began my business in Richmond
                        in 1986. I started in masonry because I was dissatisfied working for a phone company.
                        A friend knew this and was growing his company, so he  asked me if I wanted to learn 
                        the trade. I always liked working with my hands and had cut neighbors' lawns working 
                        outside, so masonry seemed a good fit for me. Also, I have always enjoyed working 
                        with people trying to do extra on projects to ensure a pleasurable outcome to my work.
                    </p>
                </div>
            </div>
        </div>
    )
}