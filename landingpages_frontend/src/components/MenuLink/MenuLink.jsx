import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab = false, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();

      // Scroll suave após o menu fechar
      setTimeout(() => {
        const targetElement = document.querySelector(link);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 300);
    }
  };

  return (
    <Styled.Container
      href={link}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}
      onClick={handleClick}
    >
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
  onClick: P.func,
};
