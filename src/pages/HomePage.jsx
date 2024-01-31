import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";

import hero from "../assets/imgs/generate-me.png"
import blob from '../assets/imgs/blob.svg'
import BackToTop from '../components/BackToTop';

const HomePage = () => {
    const downloadCv = () => {
        const pdfUrl = "curriculoHelter.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Helter Barbosa Xavier.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <section className="bg-white">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1
                            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-dark">
                            Transformando a  <br />visão em realidade &amp; com código e design.
                        </h1>

                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-600">
                            Como um desenvolvedor full-stack qualificado, me dedico a transformar ideias em aplicações web inovadoras. Explore meus projetos e artigos mais recentes, mostrando minha experiência em React.js e desenvolvimento web
                        </p>

                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <a href="https://github.com/Hertzzy" target="_blank"
                                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white border border-gray-200 rounded-lg sm:w-auto bg-black">
                                <FaGithub fontSize={24} className="mx-2" />
                                Ver GitHub
                            </a>

                            <button
                                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-blue-500 border border-gray-200 rounded-lg sm:w-auto hover:bg-blue-700" onClick={downloadCv}>

                                <IoMdDownload fontSize={24} className="mx-2" color='white' />
                                Download CV
                            </button>

                        </div>
                    </div>

                    <div className="relative lg:mt-0 lg:col-span-5 lg:flex">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#BAE6FF" d="M43.4,-53.3C58,-39.5,72.7,-27.5,77.6,-11.9C82.5,3.7,77.7,22.9,67.9,38.5C58.1,54.2,43.3,66.3,25.9,65.8C8.5,75.3,-5.6,50.2,-20.2,67.8C-40.8,66.4,-59.9,49.7,-63.8,39.5C-79.12,7.3,-84.4,0.6,-78.1,-14C-75.8,-28.6,-60.4,-41.1,-45.2,-54.8C-30,-68.4,-15,-83.2,-0.3,-82.8C14.4,-82.5,28.8,-67,43.4,-53.3Z" transform="translate(100 100)" />
                        </svg>

                        <img src={hero} alt="Hero" width={400} className='rounded-full absolute top-14 left-16 ' />

                    </div>
                </div>
            </section>
            <BackToTop />
        </div>
    )
}

export default HomePage;