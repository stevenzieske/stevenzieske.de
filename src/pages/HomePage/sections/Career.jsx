import React from 'react'
import { AiOutlineLink } from "react-icons/ai";

function Career() {

    const careerList = [
        {
            date: "September 2015 - September 2018",
            title: "High school, specialization: technology and management",
            description: "Ferdinand von Steinbeis Schule Tuttlingen",
            link: "https://steinbeisschule.de/",
        },
        {
            date: "Oktober 2018 - July 2020",
            title: "Bachelor of Science - Mechanical engineering, specialization: plastics technology (not completed)",
            description: "DHBW Stuttgart - Campus Horb",
            link: "https://www.dhbw-stuttgart.de/horb/",
            industry: "Automotive industry",
        },
        {
            date: "Oktober 2020 - present",
            title: "Bachelor of Science - Business Information Systems / Business Informatics",
            description: "DHBW Villingen-Schwenningen",
            link: "https://www.dhbw-vs.de/",
            industry: "Medical industry",
        },
    ];

    return (
        <div className="flex flex-col">
            <h3 className="py-4 text-4xl text-gray-600">Career</h3>
            <p className="leading-8 text-md txt-color-normal">In this section I would like to give you an insight into my professional career to date.</p>
            <div className="py-4">
                <ol className="relative border-l border-cyan-500">
                    {careerList.map((item, index) => (
                        <li className={`${index == careerList.length ? '' : 'mb-10'} ml-4`} key={index}>
                            <div className="absolute w-3 h-3 bg-cyan-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">{item.date}</time>
                            {item.industry ? <p className="text-base font-normal text-gray-500">{item.industry}</p> : <></>}
                            <h3 className="text-lg font-semibold text-[#083045]">{item.title}</h3>
                            <a href={item.link} target="_blank" className="flex items-center mb-4 text-base font-normal text-gray-500 w-fit hover:text-cyan-500">{item.description}<AiOutlineLink className='inline ml-1' /></a>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Career