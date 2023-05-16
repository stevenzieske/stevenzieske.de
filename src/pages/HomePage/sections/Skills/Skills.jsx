import React from 'react'

import SkillsCards from './SkillsCards'

function Skills() {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col flex-1 my-auto">
                <h3 className="py-4 text-4xl text-gray-600">Skills</h3>
                <p className="leading-8 text-md txt-color-normal">
                    In this section I would like to introduce you to my main skills and knowledge that I have acquired through my work and studies.
                    <br />
                    <br />
                    <span className="font-bold">React JS</span> and <span className="font-bold">Tailwind CSS</span> are the tools I mainly use to develop web applications, which includes the website you are currently on.
                    <br />
                    Another important tool that I am proficient in is <span className="font-bold">Docker</span> and <span className="font-bold">Docker Compose</span>. For example, I use this on my <span className="font-bold">Raspberry Pi</span> for a Jenkins instance that provides a CI/CD pipeline for deploying this website.
                    <br />
                    In addition to my technical skills, I also have in-depth knowledge of working with business processes, analyzing, modeling and implementing them using <span className="font-bold">Microsoft Power Platform</span>. I acquired these skills during my studies and through my practical experience. I have successfully completed several projects using Microsoft Power Platform.
                </p>
            </div>
            <div className="flex-1 pt-16 my-auto">
                <SkillsCards />
            </div>
        </div>
    )
}

export default Skills