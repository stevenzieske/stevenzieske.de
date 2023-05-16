import React from 'react'

import { Icon } from '@iconify/react';

function SkillsCards() {
    const skills = [
        { title: 'Python', icon: 'skill-icons:python-dark', link: 'https://www.python.org/' },
        { title: 'React', icon: 'skill-icons:react-dark', link: 'https://react.dev/' },
        { title: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark', link: 'https://tailwindcss.com/' },
        { title: 'Node.js', icon: 'skill-icons:nodejs-dark', link: 'https://nodejs.org/' },
        { title: 'Express', icon: 'skill-icons:expressjs-dark', link: 'https://expressjs.com/' },
        { title: 'MongoDB', icon: 'skill-icons:mongodb', link: 'https://www.mongodb.com/' },
        { title: 'Docker', icon: 'skill-icons:docker', link: 'https://www.docker.com/' },
        { title: 'Raspberry Pi', icon: 'skill-icons:raspberrypi-dark', link: 'https://www.raspberrypi.org/' },
    ]

    return (
        <div className='flex flex-wrap justify-center gap-4 select-none'>
            {skills.map((skill, index) => (
                <a key={index} href={skill.link} target="_blank" className="flex flex-col px-4 pt-2 text-center transition duration-300 transform bg-white shadow cursor-pointer rounded-2xl hover:shadow-lg dark:bg-white dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 hover:scale-110">
                    <Icon icon={skill.icon} height="100" className='rounded-full shadow-xl ' />
                    <h3 className="py-2 text-gray-600 dark:text-[#F7F1FF]">{skill.title}</h3>
                </a>
            ))}
        </div>

    )
}

export default SkillsCards