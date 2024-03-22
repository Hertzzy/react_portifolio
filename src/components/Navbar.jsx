import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logoSite from '../assets/logo/2-removebg-preview.png';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Sobre', href: '/about', current: false },
  { name: 'Projetos', href: '/projects', current: false },
  { name: 'Contato', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// const onButtonClick = () => {
//     const pdfUrl = "curriculoHelter.pdf";
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "Helter Barbosa Xavier.pdf"; // specify the filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// };

export default function Navbar() {
  return (
    <Disclosure
      as='nav'
      className='w-full bg-slate-900 fixed top-0 z-50 border-b'
    >
      {({ open }) => (
        <>
          <div className='mx-auto px-2 sm:px-6 lg:px-8 '>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              <div className='flex flex-1 items-center justify-between'>
                <div className='logo-position flex items-center justify-center mt-2'>
                  <a href='#' className='pb-2'>
                    <img src={logoSite} alt='' width={180} />
                  </a>
                </div>

                <div className='hidden sm:ml-6 sm:block'>
                  <div className='navation flex space-x-14'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`${classNames} text-white `}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className='links-extend absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 '>
                  <a href='https://github.com/Hertzzy' target='blank'>
                    {' '}
                    <FaGithub fontSize={22} className='mx-4 text-white' />{' '}
                  </a>
                  <a
                    href='https://www.linkedin.com/in/helterxavier/'
                    target='blank'
                  >
                    {' '}
                    <FaLinkedin
                      fontSize={28}
                      className='mx-4 text-white'
                    />{' '}
                  </a>
                  <a href='https://twitter.com/Hertzbx' target='blank'>
                    {' '}
                    <FaXTwitter
                      fontSize={28}
                      className='mx-4 text-white'
                    />{' '}
                  </a>
                  <a href='https://www.instagram.com/helter_bx/' target='blank'>
                    {' '}
                    <FaInstagram
                      fontSize={28}
                      className='mx-4 text-white'
                    />{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
      )}
    </Disclosure>
  );
}
