import React from 'react'

import BtnCustom from '../../../components/UIComponents/BtnCustom'

function Blog() {
    return (
        <div className="flex flex-col">
            <h3 className="py-4 text-4xl text-gray-600">Blog</h3>
            <p className="leading-8 text-gray-800 text-md txt-color-normal">Click the button below to go to the blog page.<br />There you can have a look at some of my previous projects.</p>
            <BtnCustom text="Go to Blog" href="/blog" additionalClassNames='mx-auto my-4 bg-cyan-500 text-white ' />
        </div>
    )
}

export default Blog