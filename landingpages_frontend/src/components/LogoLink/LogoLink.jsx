import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading/Heading';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link} target="_blank">
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
