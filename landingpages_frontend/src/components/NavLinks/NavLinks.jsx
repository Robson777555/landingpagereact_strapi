import P from 'prop-types';
import { MenuLink } from '../MenuLink/MenuLink';
import * as Styled from './styles';

export const NavLinks = ({ links = [], onLinkClick }) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} onClick={onLinkClick} />
      ))}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
  onLinkClick: P.func,
};
