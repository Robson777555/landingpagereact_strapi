import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    border-radius: 50%;
    z-index: 6;
    opacity: 0.7;
    transition: all 0.3s ease;
    cursor: pointer;

    /* Melhorias para mobile */
    @media (max-width: 768px) {
      width: 3.5rem;
      height: 3.5rem;
      bottom: 1.5rem;
      right: 1.5rem;
    }

    &:hover {
      opacity: 1;
      transform: scale(1.05);
    }

    /* Garante que seja clicável em mobile */
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  `}
`;
