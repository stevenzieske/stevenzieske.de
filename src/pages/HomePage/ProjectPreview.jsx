import React from 'react'

function ProjectPreview() {
    return (
        <div className="py-10 flex flex-col items-center">
            <h3 className="text-4xl py-2 text-gray-600">Projects</h3>
            <p className="text-md py-5 leading-8 text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore voluptatum sunt aspernatur quia consequuntur amet voluptatibus, aliquam tenetur facilis necessitatibus, voluptas omnis ipsum ratione, dolore maiores at veniam? Ea, provident.</p>
            <a
                className="bg-cyan-500 text-white px-4 py-2 border-none rounded-md hover:shadow-lg"
                href="#"
            >
                View Projects
            </a>
        </div>
    )
}

export default ProjectPreview