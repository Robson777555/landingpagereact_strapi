import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { Heading } from '../Heading/Heading';
import { TextComponent } from '../TextComponent/TextComponent';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.html>
          <TextComponent>{html}</TextComponent>
        </Styled.html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  children: P.node.isRequired,
};
