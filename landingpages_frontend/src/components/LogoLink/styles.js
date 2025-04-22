import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-weight: bold;
  text-transform: uppercase;

  > img {
    height: 3rem;
    width: auto;
  }
`;
