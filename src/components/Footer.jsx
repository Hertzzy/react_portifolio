import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='flex flex-col space-y-10 justify-center mt-12 border-t'>
      <nav className='flex justify-center flex-wrap gap-6 text-gray-300 font-medium mt-12'>
        <a className='hover:text-gray-100' href='/'>
          Home
        </a>
        <a className='hover:text-gray-100' href='/about'>
          Sobre
        </a>
        <a className='hover:text-gray-100' href='#'>
          Projetos
        </a>
        <a className='hover:text-gray-100' href='#'>
          Contato
        </a>
      </nav>

      <div className='flex justify-center space-x-5'>
        <a
          href='https://github.com/Hertzzy'
          target='blank'
          className='text-white'
        >
          {' '}
          <FaGithub fontSize={28} className='mx-4' />{' '}
        </a>
        <a href='https://www.linkedin.com/in/helterxavier/' target='blank'>
          {' '}
          <FaLinkedin fontSize={28} className='mx-4 text-white' />{' '}
        </a>
        <a
          href='https://twitter.com/Hertzbx'
          target='blank'
          className='text-white'
        >
          {' '}
          <FaXTwitter fontSize={28} className='mx-4' />{' '}
        </a>
        <a href='https://www.instagram.com/helter_bx/' target='blank'>
          {' '}
          <FaInstagram fontSize={28} className='mx-4 text-white' />{' '}
        </a>
      </div>
      <p className='text-center text-gray-200 font-medium'>
        &copy; 2024 Helter Xavier | Full Stack.
      </p>
    </footer>
  );
};

export default Footer;
