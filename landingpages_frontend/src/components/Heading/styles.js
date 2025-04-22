import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${css`
      @media (max-width: 768px) {
        font-size: ${theme.fonts.sizes.xlarge};
      }
    `}
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, $colorDark, $size, $uppercase }) => css`
    color: ${$colorDark ? theme.colors.primaryColor : theme.colors.white};
    background: transparent;
    padding: 1rem;
    
    ${titleSize[$size](theme)};
    ${titleCase($uppercase)};
  `}
`;
