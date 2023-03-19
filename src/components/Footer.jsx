import React from 'react'

function Footer() {
    return (

        <footer className="shadow-2xl mt-4 border-t-gray-300">
            <div className="w-full flex flex-col">
                <ul className="flex justify-evenly py-6 sm:px-40 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                        <a href="/privacy-statement" className="mr-4 hover:text-cyan-500 md:mr-6">Data Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/legal-disclosure" className="mr-4 hover:text-cyan-500 md:mr-6 ">Legal Disclosure</a>
                    </li>
                </ul>
                <hr className="border-gray-200 dark:border-gray-200 mx-4" />
                <span className=" mx-auto py-4 text-sm text-gray-500 dark:text-gray-400">Copyright © 2023 by Steven Zieske</span>
            </div>
        </footer>


    )
}

export default Footer