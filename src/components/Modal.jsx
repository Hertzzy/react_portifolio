import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <a className="cursor-pointer text-sky-500 transition-all duration-300 group-hover:text-white font-bold" onClick={openModal} >Vizualizar
        &rarr;
      </a>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>

          <div className="bg-white rounded-lg p-8 z-50">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-gray-700 hover:text-gray-900"
              >
                <IoMdClose fontSize={32} />
              </button>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">Conteúdo do Modal</h2>
              <p>
                Aqui você pode colocar qualquer conteúdo que desejar dentro do
                modal.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
