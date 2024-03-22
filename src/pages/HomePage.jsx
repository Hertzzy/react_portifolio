import { FaGithub } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';

// import hero from "../assets/imgs/generate-me.png";
import BackToTop from '../components/BackToTop';

const HomePage = () => {
  const downloadCv = () => {
    const pdfUrl = 'curriculoHelter.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Helter Barbosa Xavier.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <section className='bg-slate-900 mt-16'>
        <div className='mx-auto flex flex-col items-center py-12 sm:py-24'>
          <div className='w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10'>
            <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10 mt-16'>
              Transformando a visão em realidade &amp; com código e design.
            </h1>

            <p className='mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl'>
              Como um desenvolvedor full-stack qualificado, me dedico a
              transformar ideias em aplicações web inovadoras. Explore meus
              projetos e artigos mais recentes, mostrando minha experiência em
              React.js e desenvolvimento web
            </p>

            <div className='space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-14'>
              <a
                href='https://github.com/Hertzzy'
                target='_blank'
                className='inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white border border-gray-200 rounded-lg sm:w-auto bg-black'
                rel='noreferrer'
              >
                <FaGithub fontSize={24} className='mx-2' />
                Ver GitHub
              </a>

              <button
                className='inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-blue-500 border border-gray-200 rounded-lg sm:w-auto hover:bg-blue-700'
                onClick={downloadCv}
              >
                <IoMdDownload fontSize={24} className='mx-2' color='white' />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </div>
  );
};

export default HomePage;
