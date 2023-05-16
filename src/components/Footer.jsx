import React from 'react'

function Footer() {
    return (

        <footer className="">
            <div className="flex flex-col w-full">
                <ul className="flex py-6 text-sm text-gray-500 justify-evenly sm:px-40 dark:text-gray-400">
                    <li>
                        <a href="/legal-disclosure" className="hover:text-cyan-500 ">Legal Disclosure</a>
                    </li>
                    <li>
                        <a href="/privacy-statement" className="hover:text-cyan-500 ">Data Privacy Policy</a>
                    </li>
                </ul>
                <hr className="mx-4 border-gray-200 dark:border-gray-200" />
                <span className="py-4 mx-auto text-sm text-gray-500  dark:text-gray-400">Copyright © 2023 by Steven Zieske</span>
            </div>
        </footer>


    )
}

export default Footer