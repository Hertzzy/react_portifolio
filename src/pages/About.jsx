import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { GrSystem } from 'react-icons/gr';

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaReact,
  FaNode,
} from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import BackToTop from '../components/BackToTop';

const About = () => {
  return (
    <div className='max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between mt-12'>
      <div className='text-center'>
        <h3 className='text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-dark mt-12 text-white'>
          Sobre <span className='text-blue-500'>mim</span>
        </h3>
        <p className='text-sm leading-7 text-gray-200 font-normal'>
          HELTER BARBOSA XAVIER
        </p>
        <p className='mt-2 text-base leading-6 text-gray-300'>
          Estudante de Engenharia de Software. Estou imerso no universo de
          desenvolvimento de software. Minhas habilidades técnicas abrangem
          algumas linguagens, incluindo JavaScript, PHP e alguns frameworks como
          React, Node e Laravel e também SQL, além de Bootstrap e Tailwind.
        </p>
      </div>

      <h4 className='text-3xl md:text-5xl dark:text-white font-bold mb-6 mt-12 text-center'>
        Habilidades
      </h4>

      <div className='relative flex flex-row space-bee space-x-5 mt-12'>
        <div className='group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10'>
          <span className='absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[10]'></span>
          <div className='relative z-10 mx-auto max-w-md'>
            <span className='grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-400'>
              <HiOutlineComputerDesktop color='white' fontSize={42} />
            </span>
            <div className='space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90'>
              <p>
                Desenvolvimento de sites e sistemas web dinâmicos e estáticos
                utilizando HTML5, CSS3, bootstrap, Tailwind e React.js.
              </p>
            </div>
            <div className='pt-5 text-base font-semibold leading-7'>
              <p>
                <a
                  href='https://github.com/Hertzzy'
                  className='text-sky-500 transition-all duration-300 group-hover:text-white'
                  target='_blank'
                  rel='noreferrer'
                >
                  Ver projetos &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10'>
          <span className='absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[10]'></span>
          <div className='relative z-10 mx-auto max-w-md'>
            <span className='grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-400'>
              <GrSystem color='white' fontSize={42} />
            </span>
            <div className='space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90'>
              <p>Desenvolvimento de APi’s utilizando Node.js</p>
            </div>
            <div className='pt-5 text-base font-semibold leading-7'>
              <p>
                <a
                  href='https://github.com/Hertzzy'
                  className='text-sky-500 transition-all duration-300 group-hover:text-white'
                  target='_blank'
                  rel='noreferrer'
                >
                  Ver projetos &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=' p-4 mt-16'>
        <h4 className='text-3xl md:text-5xl text-white font-bold mb-6 text-center mt-16'>
          Tecnologias
        </h4>

        <div className='flex space-x-[88%] ml-2.5'>
          <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] '>
            HTML5
          </span>
          <span className='font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6] text-right '>
            100%
          </span>
        </div>
        <div className='styles-skills relative h-3 rounded-full overflow-hidden bg-gray-300 '>
          <div
            className='absolute top-0 bottom-0 left-0 rounded-mg bg-gradient-to-r from-blue-500 to-purple-500'
            style={{ width: '100%' }}
          ></div>
        </div>

        <div className='flex space-x-[91%] ml-2.5 mt-4'>
          <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] '>
            CSS3
          </span>
          <span className='font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6] text-right '>
            100%
          </span>
        </div>
        <div className='styles-skills relative h-3 rounded-full overflow-hidden bg-gray-300 '>
          <div
            className='absolute top-0 bottom-0 left-0 rounded-mg bg-gradient-to-r from-blue-500 to-purple-500'
            style={{ width: '100%' }}
          ></div>
        </div>

        <div className='flex space-x-[82%] ml-2.5 mt-4'>
          <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] '>
            BOOTSTRAP
          </span>
          <span className='font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6] text-right '>
            60%
          </span>
        </div>
        <div className='styles-skills relative h-3 rounded-full overflow-hidden bg-gray-300 '>
          <div
            className='absolute top-0 bottom-0 left-0 rounded-mg bg-gradient-to-r from-blue-500 to-purple-500'
            style={{ width: '60%' }}
          ></div>
        </div>

        <div className='flex space-x-[85%] ml-2.5 mt-4'>
          <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] '>
            TAILWIND
          </span>
          <span className='font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6] text-right '>
            50%
          </span>
        </div>
        <div className='styles-skills relative h-3 rounded-full overflow-hidden bg-gray-300 '>
          <div
            className='absolute top-0 bottom-0 left-0 rounded-mg bg-gradient-to-r from-blue-500 to-purple-500'
            style={{ width: '50%' }}
          ></div>
        </div>

        <div className='flex space-x-[83%] ml-2.5 mt-4'>
          <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] '>
            JAVASCRIPT
          </span>
          <span className='font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6] text-right '>
            65%
          </span>
        </div>
        <div className='styles-skills relative h-3 rounded-full overflow-hidden bg-gray-300 '>
          <div
            className='absolute top-0 bottom-0 left-0 rounded-mg bg-gradient-to-r from-blue-500 to-purple-500'
            style={{ width: '65%' }}
          ></div>
        </div>

        <div className='flex space-x-[90%] ml-2.5 mt-4'>
          <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] '>
            REACT
          </span>
          <span className='font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6] text-right '>
            70%
          </span>
        </div>
        <div className='styles-skills relative h-3 rounded-full overflow-hidden bg-gray-300 '>
          <div
            className='absolute top-0 bottom-0 left-0 rounded-mg bg-gradient-to-r from-blue-500 to-purple-500'
            style={{ width: '70%' }}
          ></div>
        </div>

        <div className='flex space-x-[90%] ml-2.5 mt-4'>
          <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] '>
            NODE
          </span>
          <span className='font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6] text-right '>
            70%
          </span>
        </div>
        <div className='styles-skills relative h-3 rounded-full overflow-hidden bg-gray-300 '>
          <div
            className='absolute top-0 bottom-0 left-0 rounded-mg bg-gradient-to-r from-blue-500 to-purple-500'
            style={{ width: '70%' }}
          ></div>
        </div>

        <div className='flex space-x-[90%] ml-2.5 mt-4'>
          <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] '>
            MYSQL
          </span>
          <span className='font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6] text-right '>
            50%
          </span>
        </div>
        <div className='styles-skills relative h-3 rounded-full overflow-hidden bg-gray-300 '>
          <div
            className='absolute top-0 bottom-0 left-0 rounded-mg bg-gradient-to-r from-blue-500 to-purple-500'
            style={{ width: '50%' }}
          ></div>
        </div>

        <div className='flex space-x-[90%] ml-2.5 mt-4'>
          <span className='text-base text-gray-lite font-semibold dark:text-[#A6A6A6] '>
            PYTHON
          </span>
          <span className='font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6] text-right '>
            30%
          </span>
        </div>
        <div className='styles-skills relative h-3 rounded-full overflow-hidden bg-gray-300 '>
          <div
            className='absolute top-0 bottom-0 left-0 rounded-mg bg-gradient-to-r from-blue-500 to-purple-500'
            style={{ width: '30%' }}
          ></div>
        </div>
      </div>

      <div className='flex flex-row space-x-5 mx-auto mt-10'>
        <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML'>
          <FaHtml5 fontSize={42} className='text-orange-600' />
        </a>
        <a
          href='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
          target='_blank'
          rel='noreferrer'
        >
          <FaCss3Alt fontSize={42} className=' text-sky-600' />
        </a>
        <a href='https://getbootstrap.com/' target='_blank' rel='noreferrer'>
          <FaBootstrap fontSize={42} className=' text-violet-600' />
        </a>
        <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>
          <SiTailwindcss fontSize={42} className=' text-blue-600' />
        </a>
        <a
          href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
          target='_blank'
          rel='noreferrer'
        >
          <IoLogoJavascript fontSize={42} className=' text-yellow-400' />
        </a>
        <a href='https://react.dev/' target='_blank' rel='noreferrer'>
          <FaReact fontSize={42} className=' text-sky-300' />
        </a>
        <a href='https://nodejs.org/en' target='_blank' rel='noreferrer'>
          <FaNode fontSize={42} className=' text-green-700' />
        </a>
        <a href='https://www.mysql.com/' target='_blank' rel='noreferrer'>
          <SiMysql fontSize={42} className=' text-orange-400' />
        </a>
        <a href='https://www.python.org/' target='_blank' rel='noreferrer'>
          <FaPython fontSize={42} className=' text-blue-800' />
        </a>
      </div>

      <BackToTop />
    </div>
  );
};

export default About;
