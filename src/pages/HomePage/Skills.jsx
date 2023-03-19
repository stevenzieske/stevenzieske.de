import React from 'react'

import SkillsCards from './SkillsCards'

function Skills() {
    return (
        <div className="py-10 flex flex-col items-center">
            <h3 className="text-4xl py-2 text-gray-600">Skills</h3>
            <p className="text-md py-5 leading-8 text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore voluptatum sunt aspernatur quia consequuntur amet voluptatibus, aliquam tenetur facilis necessitatibus, voluptas omnis ipsum ratione, dolore maiores at veniam? Ea, provident.</p>
            <p className="text-md py-5 leading-8 text-gray-800">In the following you can see the techs I worked with. Some of them I used in my time at University and some of them I learned for private projects.</p>
            <SkillsCards />
        </div>
    )
}

export default Skills