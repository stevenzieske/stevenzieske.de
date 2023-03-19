import React from 'react'

import { Icon } from '@iconify/react';

function SkillsCards() {
    const skills = [
        { title: 'Python', icon: 'skill-icons:python-dark', link: '#' },
        { title: 'React', icon: 'skill-icons:react-dark', link: '#' },
        { title: 'Tailwind', icon: 'skill-icons:tailwindcss-dark', link: '#' },
        { title: 'Node JS', icon: 'skill-icons:nodejs-dark', link: '#' },
        { title: 'Express JS', icon: 'skill-icons:expressjs-dark', link: '#' },
        { title: 'Docker', icon: 'skill-icons:docker', link: '#' },
        { title: 'MongoDB', icon: 'skill-icons:mongodb', link: '#' },
        { title: 'Raspberry Pi', icon: 'skill-icons:raspberrypi-dark', link: '#' },
    ]

    return (
        <div className='flex flex-wrap justify-center gap-4'>
            {skills.map((skill, index) => (
                <a key={index} href={skill.link} target="_blank" className="flex flex-col text-center shadow pt-2 px-4 rounded-2xl hover:shadow-lg cursor-pointer">
                    <Icon icon={skill.icon} height="100" className=' shadow-xl rounded-full' />
                    <h3 className="py-2 text-gray-800">{skill.title}</h3>
                </a>
            ))}
        </div>
    )
}

export default SkillsCards