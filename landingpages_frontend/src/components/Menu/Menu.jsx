import { useState } from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { LogoLink } from '../LogoLink/LogoLink';
import { NavLinks } from '../NavLinks/NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useEffect } from 'react';

export const Menu = ({ links = [], logoData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsVisible(false);
    }
  };

  return (
    <>
      <Styled.Container $isVisible={isVisible}>
        <SectionContainer>
          <Styled.MenuContent>
            <LogoLink {...logoData} />
            <NavLinks links={links} onLinkClick={handleLinkClick} />
          </Styled.MenuContent>
        </SectionContainer>
      </Styled.Container>

      {isMobile && (
        <Styled.Button
          onClick={() => setIsVisible(!isVisible)}
          aria-label={isVisible ? 'Fechar menu' : 'Abrir menu'}
        >
          {isVisible ? <CloseIcon /> : <MenuIcon />}
        </Styled.Button>
      )}
    </>
  );
};
Menu.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
  logoData: P.shape({
    text: P.string.isRequired,
    link: P.string.isRequired,
  }).isRequired,
};

export default Menu;
