import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';
export const Container = styled.div`
  /* eslint-disable-next-line no-unused-vars */
  ${({ theme }) => css`
   font-family: ${theme.fonts.family.default};
   ${TextComponent} {
    margin-bottom: ${theme.spacings.xhuge};
   }
    
  `}
`;

export const Grid = styled.div`
  /* eslint-disable-next-line no-unused-vars */
  ${({ theme }) => css`
   font-family: ${theme.fonts.family.default};
   counter-reset: grid-counter; 
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
   gap: ${theme.spacings.large};
  `}
`;

export const GridElement = styled.div`
  /* eslint-disable-next-line no-unused-vars */
  ${({ theme }) => css`
   font-family: ${theme.fonts.family.default};
   ${HeadingContainer} {
    position: relative;
    left: 5rem ;
   }

   ${HeadingContainer}::before {
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;
    top: -3rem;
    left: -5rem;
    transform: rotate(5deg);
   }
    
  `}
`;
