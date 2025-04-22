import P from 'prop-types';
import { useEffect, useRef } from 'react';
import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material/KeyboardArrowUp';
//eslint-disable-next-line
export const GoTop = ({}) => {
  const buttonRef = useRef(null);

  const scrollToTop = (e) => {
    e.preventDefault();

    // Suporte para browsers mais antigos
    const scrollOptions = {
      top: 0,
      behavior: 'smooth',
    };

    // Fallback para browsers que não suportam smooth scroll
    if (!('scrollBehavior' in document.documentElement.style)) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(scrollOptions);
    }
  };

  useEffect(() => {
    const button = buttonRef.current;

    // Eventos para desktop e mobile
    button.addEventListener('click', scrollToTop);
    button.addEventListener('touchstart', scrollToTop, { passive: false });

    return () => {
      button.removeEventListener('click', scrollToTop);
      button.removeEventListener('touchstart', scrollToTop);
    };
  }, []);

  return (
    <Styled.Container
      ref={buttonRef}
      href="#"
      aria-label="Go to top"
      onClick={(e) => e.preventDefault()} // Previne comportamento padrão adicional
    >
      <KeyboardArrowUp size={24} /> {/* Tamanho ajustável do ícone */}
    </Styled.Container>
  );
};
