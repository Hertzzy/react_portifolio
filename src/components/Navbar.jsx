import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";


const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Sobre', href: '/about', current: false },
    { name: 'Projetos', href: '#', current: false },
    { name: 'Contato', href: '#', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const onButtonClick = () => {
    const pdfUrl = "curriculoHelter.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Helter Barbosa Xavier.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default function Navbar() {
    return (
        <Disclosure as="nav" className="w-full mt-3.5">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-between">

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="navation flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={`${classNames}`}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}

                                                {/* <span className='h-[1px] inline-block w-full bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300'>&nbsp;</span> */}
                                            </a>
                                        ))}

                                    </div>
                                </div>

                                <div className="logo-position flex items-center justify-center mt-2">
                                    <a href="#" className='w-16 h-16 bg-dark text-white flex items-center justify-center font-bold text-xl border-4 border-black rounded-full bg-black'>HX</a>
                                </div>

                                <div className="links-extend absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                                    {/* Download CV */}
                                    {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 rounded text-sm" onClick={onButtonClick}>
                                        Download CV
                                    </button> */}
                                    <a href="https://github.com/Hertzzy" target='blank'> <FaGithub fontSize={28} className="mx-4" /> </a>
                                    <a href="https://www.linkedin.com/in/helterxavier/" target='blank'> <FaLinkedin fontSize={28} className="mx-4 text-blue-600" /> </a>
                                    <a href="https://twitter.com/Hertzbx" target='blank'> <FaXTwitter fontSize={28} className="mx-4" /> </a>
                                    <a href="https://www.instagram.com/helter_bx/" target='blank'> <FaInstagram fontSize={28} className="mx-4 text-pink-500" /> </a>
                                    <MdOutlineDarkMode fontSize={32} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}



// atribuição