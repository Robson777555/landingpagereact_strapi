import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    width: 100%;

    @media (min-width: 769px) {
      flex-direction: row;
      gap: ${theme.spacings.medium};
      width: auto;
    }

    a {
      color: ${theme.colors.primaryColor};
      text-decoration: none;
      font-size: ${theme.fonts.sizes.medium};
      padding: ${theme.spacings.small} 0;
      transition: color 0.3s ease;
      font-family: ${theme.fonts.family.default};

      &:hover {
        color: ${theme.colors.secondaryColor};
      }

      @media ${theme.media.lteMedium} {
        border-bottom: 1px solid ${theme.colors.mediumGray};
        text-align: center;
        padding: ${theme.spacings.small} ${theme.spacings.medium};
      }
    }
  `}
`;
