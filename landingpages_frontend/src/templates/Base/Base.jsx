import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';
import { GoTop } from '../../components/GoTop/GoTop';
import { HashRouter as Router } from 'react-router-dom';
import { ScrollToAnchor } from '../../components/ScrollToAnchor/ScrollToAnchor';
import { GlobalMobileStyles } from './styles';

export const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <Router>
      <GlobalMobileStyles />
      <ScrollToAnchor />
      <Menu links={links} logoData={logoData} />
      <Styled.ContentWrapper>
        <Styled.MainContent>{children}</Styled.MainContent>
        <Footer footerHtml={footerHtml} />
      </Styled.ContentWrapper>
      <GoTop />
    </Router>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
