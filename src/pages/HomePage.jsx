import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";

// import { hero } from "../assets/imgs/hero.png"

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
                            Turning Vision Into <br /> Reality &amp; With Code And Design.
                        </h1>

                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-600">
                            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                            This
                        </p>

                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <a href="https://github.com/themesberg/landwind" target="_blank"
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

                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="https://demo.themesberg.com/landwind/images/hero.png" />
                    </div>

                </div>
            </section>

        </div>
    )
}

export default HomePage;