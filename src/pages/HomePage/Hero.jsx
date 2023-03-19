import React from 'react'

import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineMinus } from 'react-icons/ai'

function Hero() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:basis-4/12 pt-10 md:pt-4">
                <h2 className="text-5xl text-cyan-500 whitespace-nowrap">Steven Zieske</h2>
                <h3 className="text-xl md:text-2xl text-gray-600">Student</h3>
            </div>
            <div className="flex flex-col md:basis-8/12 justify-between">
                <p className="py-4 md:pl-10 text-md leading-8 text-gray-800">
                    Welcome to my website!
                    <br />
                    I am a business informatics student from southern Germany. I love to work with the latest technologies and trends in the field of computer science.
                    <br />
                    Due to my academic training and practical experience, I have gained an extensive understanding of business processes and information systems. I am able to analyze and identify complex problems and develop effective solutions that improve business efficiency and increase competitiveness. My background has allowed me to gain a great deal of work experience in a variety of fields for my age.
                    <br />
                    I try to keep up to date with the latest technologies and developments and apply my knowledge to my business as well as personal projects. I am excited about the opportunity to work with other people from different disciplines to develop innovative solutions.
                    <br />
                    <br />
                    Feel free to explore my projects and skills on this website and I look forward to hearing from you.</p>
                <div className=" text-5xl flex justify-center pb-2 gap-6 md:gap-16 text-gray-600">
                    <a href="#">
                        <AiFillLinkedin className="text-4xl hover:text-cyan-500" />
                    </a>
                    <a href="mailto:steven.hz@outlook.de">
                        <AiFillMail className="text-4xl hover:text-cyan-500" />
                    </a>
                    <a href="#">
                        <AiFillGithub className="text-4xl hover:text-cyan-500" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero