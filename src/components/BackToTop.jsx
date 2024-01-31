import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);
    return (
        <>
            {/* Botão para voltar ao topo */}
            {showScroll &&
                <button
                    className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white px-4 py-4 rounded-full shadow-md"
                    onClick={scrollTop}
                >
                    <FaArrowUp fontSize={26} />
                </button>
            }
        </>
    )
}

export default BackToTop