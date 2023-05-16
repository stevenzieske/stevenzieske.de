import React from 'react'

function LegalDisclosure() {
    return (
        <section className="w-full py-16">
            <div className="container w-10/12 mx-auto sm:w-8/12">
                <h1 className="pb-2 text-2xl">Legal Disclosure</h1>
                <h3 className="pb-4 text-xl">Information in accordance with section 5 TMG</h3>
                <p className="">
                    Steven Zieske
                    <br />
                    Weilenstraße 22
                    <br />
                    78573 Wurmlingen
                    <br />
                    Germany
                </p>
                <h3 className="pt-4 pb-2 text-xl">Contact</h3>
                <p>
                    Phone: <a href="tel:017664797823" className="hover:text-cyan-500">+49 (0) 176 - 64797823</a>
                    <br />
                    E-Mail: <a href="mailto:steven.hz@outlook.de" className="hover:text-cyan-500">steven.hz@outlook.de</a>
                    <br />
                    Web address: <a href="https://stevenzieske.de" target="_blank" className="hover:text-cyan-500">https://stevenzieske.de</a>
                </p>
            </div>
        </section>

    )
}

export default LegalDisclosure