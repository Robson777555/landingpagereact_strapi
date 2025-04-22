import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { Heading } from '../Heading/Heading';
import { TextComponent } from '../TextComponent/TextComponent';

export const GridTwoCollumns = ({
  title,
  text,
  srcImg,
  background = false,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent colorDark={!background}>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.Image src={srcImg} alt={title} />
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoCollumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
