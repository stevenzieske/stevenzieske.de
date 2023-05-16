import React from 'react'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills/Skills'
import Career from './sections/Career'
import Blog from './sections/Blog'

function HomePage() {
    const sections = [
        <About />,
        <Skills />,
        <Career />,
        <Blog />
    ]

    return (
        <>
            <section className="pb-10 md:py-0 min-h-[80vh] flex flex-col justify-center bg-[#daf5ff]">
                <Hero />
            </section >
            <div className="flex flex-col">
                {sections.map((section, index) => (
                    <section className={`w-full py-16 ${index % 2 == 0 ? "" : "bg-gray-100"}`} key={index}>
                        <div className="container w-10/12 mx-auto sm:w-8/12">
                            {section}
                        </div>
                    </section>
                ))}
            </div>
        </>
    )
}

export default HomePage