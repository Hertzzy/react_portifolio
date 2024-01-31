import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdOutlineDarkMode } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className="flex flex-col space-y-10 justify-center m-10">

            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <a className="hover:text-gray-900" href="/">Home</a>
                <a className="hover:text-gray-900" href="/about">Sobre</a>
                <a className="hover:text-gray-900" href="#">Projetos</a>
                <a className="hover:text-gray-900" href="#">Contato</a>
            </nav>

            <div className="flex justify-center space-x-5">
                <a href="https://github.com/Hertzzy" target='blank'> <FaGithub fontSize={28} className="mx-4" /> </a>
                <a href="https://www.linkedin.com/in/helterxavier/" target='blank'> <FaLinkedin fontSize={28} className="mx-4 text-blue-600" /> </a>
                <a href="https://twitter.com/Hertzbx" target='blank'> <FaXTwitter
                    fontSize={28} className="mx-4" /> </a>
                <a href="https://www.instagram.com/helter_bx/" target='blank'> <FaInstagram fontSize={28} className="mx-4 text-pink-500" /> </a>
            </div>
            <p className="text-center text-gray-700 font-medium">&copy; 2024 Helter Xavier | Full Stack.</p>
        </footer>
    )
}

export default Footer