import styled, { css } from 'styled-components';

export const Container = styled.div`
  /* eslint-disable-next-line no-unused-vars */
  ${({ theme }) => css`
    font-family:${theme.fonts.family.default}; 
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
    

  `}
`;

export const html = styled.div`
  /* eslint-disable-next-line no-unused-vars */
  ${({ theme }) => css`
    font-family:${theme.fonts.family.default}; 
    margin:${theme.spacings.xhuge} 0;
    text-align: center;
    
    pre {
      display: inline-block;
      
      margin: 0 auto;
    }

  `}
`;
