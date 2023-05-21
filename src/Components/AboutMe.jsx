import React from "react"

export default function AboutMe() {
    return (
        <div className="text-[#F8F8F8] pl-[45px] pb-[75px]">
            <div className="flex flex-col lg:flex-row">
                <div className="mr-[200px]">
                    <h1 className="text-[60px] text-white mb-[100px]">
                        I am Larry Hofma and have been a mason since 1980.
                    </h1>
                    <h1 className="text-[40px] text-[#DEDEDE]">About Me</h1>
                    <p className="mt-[20px] text-xl text-[#999999] leading-8">
                        I apprenticed for six years and began my business in Richmond
                        in 1986. I started in masonry because I was dissatisfied working for a phone company.
                        A friend knew this and was growing his company, so he  asked me if I wanted to learn 
                        the trade. I always liked working with my hands and had cut neighbors' lawns working 
                        outside, so masonry seemed a good fit for me. Also, I have always enjoyed working 
                        with people trying to do extra on projects to ensure a pleasurable outcome to my work.
                    </p>
                </div>
                <div className="[min-width:1000px] h-[100%] mr-[70px]">
                    <img className=" rounded-t-[30px]"
                    src="../Images\IMG_20170524_161141065.jpg"/>
                </div>
            </div>
        </div>
    )
}