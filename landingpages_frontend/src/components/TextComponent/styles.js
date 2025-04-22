import styled, { css } from 'styled-components';

export const Container = styled.div`
  /* eslint-disable-next-line no-unused-vars */
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
  `}
`;
