import styled, { css } from 'styled-components';

const containerBackgroundActive = (theme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  /* eslint-disable-next-line no-unused-vars */
  ${({ theme, background }) => css`
    font-family: ${theme.fonts.family.default};
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActive(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
