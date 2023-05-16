import React from 'react'

import BtnCustom from '../../../components/UIComponents/BtnCustom'

function Blog() {
    return (
        <div className="flex flex-col">
            <h3 className="py-4 text-4xl text-gray-600">Blog</h3>
            <p className="leading-8 text-gray-800 text-md txt-color-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore voluptatum sunt aspernatur quia consequuntur amet voluptatibus, aliquam tenetur facilis necessitatibus, voluptas omnis ipsum ratione, dolore maiores at veniam? Ea, provident.</p>
            <BtnCustom text="Go to Blog" href="/blog" additionalClassNames='mx-auto my-4 bg-cyan-500 text-white ' />
        </div>
    )
}

export default Blog