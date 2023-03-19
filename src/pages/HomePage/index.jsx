import React from 'react'

import Hero from './Hero'
import Skills from './Skills'
import Career from './Career'
import ProjectPreview from './ProjectPreview'

function HomePage() {
    return (
        <>
            <section className="pb-10 md:py-0 min-h-screen flex flex-col justify-center">
                <Hero />
            </section>
            <section className="flex flex-col justify-center">
                <Skills />
            </section>
            <section className="flex flex-col justify-center">
                <Career />
            </section>
            <section className="flex flex-col justify-center">
                <ProjectPreview />
            </section>
        </>
    )
}

export default HomePage