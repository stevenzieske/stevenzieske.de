import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ dropdownText = "", dropdownElements = [], alignment = "left", }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className=" txt-color-normal hover:text-[#083045]">
                <Menu.Button className="inline-flex items-center justify-center w-full">
                    {dropdownText}
                    <ChevronDownIcon className="w-5 h-5 -mr-1" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg md:right-0 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {dropdownElements.map((element, index) => (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <a
                                        href={element.href}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'txt-color-normal',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        {element.name}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu >
    )
}
