import React from 'react'
import Button from 'react-bootstrap/Button';
import ModalProjects from '../components/Modal';
import { GrSystem } from 'react-icons/gr';
import Modal from '../components/Modal';
import BackToTop from '../components/BackToTop';



const Projects = () => {

    return (
        <>
            <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
                <div className="text-center">
                    <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-dark mt-12">
                        Meus <span className="text-blue-500">Projetos</span>
                    </h3>
                </div>
                <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6"></h4>

            </div>

            <div class="h-full min-h-screen w-full  pt-12 p-4">
                <div class="grid gap-14 md:grid-cols-3 md:gap-5 ">
                    <div class="rounded-xl bg-white p-6 text-center shadow-xl ring-1 ring-gray-900/5">
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                            icon
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">Landing page com HTML, CSS & Javascript</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                        <Modal />
                    </div>
                    <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl ring-1 ring-gray-900/5">
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                            icon
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-14 ">Tela de login e cadastro com HTML, CSS & Bootstrap</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                        <Modal />
                    </div>
                    <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl ring-1 ring-gray-900/5">
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                            icon
                        </div>
                        <h1 class="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">Landing page com HTML & Tailwind css</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                        <Modal />
                    </div>
                </div>

                <div class="grid gap-14 md:grid-cols-3 md:gap-5 mt-12">
                    <div class="rounded-xl bg-white p-6 text-center shadow-xl ring-1 ring-gray-900/5">
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                            icon
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">Projeto Upload de arquivos PDF</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                        <Modal />
                    </div>
                    <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl ring-1 ring-gray-900/5">
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                            icon
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-14 ">Projeto Controle de usuários</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                        <Modal />
                    </div>
                    <div data-aos-delay="300" class="rounded-xl bg-white p-6 text-center shadow-xl ring-1 ring-gray-900/5">
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                            icon
                        </div>
                        <h1 class="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">Login e autenticação com Node & React</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                        <Modal />
                    </div>
                </div>

                <div class="grid gap-14 md:grid-cols-3 md:gap-5 mt-12">
                    <div data-aos-delay="300" class="rounded-xl bg-white p-6 text-center shadow-xl ring-1 ring-gray-900/5">
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                            icon
                        </div>
                        <h1 class="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">Login e autenticação Laravel</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                        <Modal />

                    </div>

                    <BackToTop />
                </div>

            </div >

        </>
    )
}

export default Projects