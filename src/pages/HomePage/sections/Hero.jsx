import React from 'react'
import { TypeAnimation } from 'react-type-animation';

import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineMinus } from 'react-icons/ai'

function Hero() {
    return (
        <div className="container flex flex-col w-10/12 mx-auto md:flex-row sm:w-8/12">
            <div className="flex-1 my-auto">
                <div className="">
                    <h2 className="py-4 pt-8 md:py-0 md:pt-0 text-5xl text-[#083045] whitespace-nowrap">Steven Zieske</h2>
                    <span className='text-xl md:text-2xl txt-color-normal'>
                        <TypeAnimation
                            sequence={[
                                'Student',
                                1000,
                                'Programmer',
                                1000,
                                'Administrator',
                                1000,
                                'Developer',
                                2000,
                            ]}
                            repeat={Infinity}
                        />
                    </span>
                    <div className="">
                        <p className="py-4 leading-8 text-md txt-color-normal">
                            Welcome to my website!
                            <br />
                            I am a business informatics student from southern Germany. I love to work with the latest technologies and trends in the field of computer science.
                            <br />
                            Feel free to explore my projects and skills on this website and I look forward to hearing from you.
                        </p>
                        <div className="flex justify-center gap-6 text-5xl md:gap-16 txt-color-normal">
                            <a href="https://github.com/stevenzieske" target="_blank">
                                <AiFillGithub className="text-4xl hover:text-[#083045] transform transition duration-300 hover:scale-125" />
                            </a>
                            <a href="#">
                                <AiFillLinkedin className="text-4xl hover:text-[#083045] transform transition duration-300 hover:scale-125" />
                            </a>
                            <a href="mailto:steven.hz@outlook.de">
                                <AiFillMail className="text-4xl hover:text-[#083045] transform transition duration-300 hover:scale-125" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1 py-4 pt-8 md:py-0 md:pt-0">
                <img className="rounded-full shadow-xl h-[340px]" src="./publicAssets/Zieske, Steven.jpg" alt="profilePicture" />
            </div>
        </div>
    )
}

export default Hero