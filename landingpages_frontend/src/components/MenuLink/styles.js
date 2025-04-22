import styled, { css } from 'styled-components';

export const Container = styled.a`
  /* eslint-disable-next-line no-unused-vars */
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.primaryColor};
    position: relative;
    text-transform: uppercase;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.5rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background-color: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
    
    @media ${({ theme }) => theme.media.lteMedium} {
      font-size: ${theme.fonts.sizes.medium};
      padding: ${theme.spacings.medium};
      text-align: center;
      min-height: 44px;
      display: block;
      width: 100%;
      
      &::after {
        bottom: 0.5rem;
        width: 0;
      }

      &:hover::after {
        left: 25%;
        width: 50%;
      }
    }
  `}
`;
