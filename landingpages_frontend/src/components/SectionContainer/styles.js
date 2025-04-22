import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      padding: ${theme.spacings.medium};
    }

    @media ${theme.media.lteSmall} {
      padding: ${theme.spacings.small};
    }
  `}
`;
