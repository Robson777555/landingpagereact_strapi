import styled, { css } from 'styled-components';
import { Heading } from '../Heading/Heading';

export const Container = styled.div`
  ${({ theme, background, darkMode }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: ${theme.spacings.large};
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    background: ${
      background
        ? darkMode
          ? theme.colors.darkBg
          : theme.colors.white
        : 'transparent'
    };
    color: ${darkMode ? theme.colors.white : theme.colors.primaryColor};
    transition: all 300ms ease-in-out;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      gap: ${theme.spacings.medium};
    }

    @media ${theme.media.lteSmall} {
      padding: ${theme.spacings.medium} ${theme.spacings.small};
    }

    @media ${theme.media.iphone} {
      padding: ${theme.spacings.small} ${theme.spacings.xsmall};
      gap: ${theme.spacings.small};
    }

    /* Regra específica para 325px de largura e até 852px de altura */
    @media (max-width: 325px) and (max-height: 852px) {
      padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall || '0.4rem'};
      gap: ${theme.spacings.xsmall};
    }

    ${Heading} {
      color: ${darkMode ? theme.colors.white : theme.colors.black};
      margin-bottom: ${theme.spacings.medium};
      font-size: ${theme.fonts.sizes.xxlarge};
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      @media ${theme.media.lteMedium} {
        font-size: ${theme.fonts.sizes.xlarge};
        margin-bottom: ${theme.spacings.small};
        white-space: normal;
      }

      @media ${theme.media.lteSmall} {
        font-size: ${theme.fonts.sizes.large};
        margin-bottom: ${theme.spacings.small};
      }

      @media ${theme.media.iphone} {
        font-size: ${theme.fonts.sizes.large};
        margin-bottom: ${theme.spacings.xsmall};
        white-space: nowrap;
        letter-spacing: -0.5px;
        padding: 0 ${theme.spacings.xsmall};
       
      }

      @media (max-width: 325px) and (max-height: 852px) {
        font-size: ${theme.fonts.sizes.medium};
        margin-bottom: ${theme.spacings.xsmall};
        letter-spacing: -0.3px;
        background: red;
      }
    }

    
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
  `};
`;

export const TextComponent = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
  `};
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media ${theme.media.iphone} {
      padding: 0 ${theme.spacings.xsmall};
    }

    @media (max-width: 325px) and (max-height: 852px) {
      padding: 0 ${theme.spacings.xxsmall || '0.4rem'};
    }
  `}
`;

export const Image = styled.img`
  ${({ theme, darkMode }) => css`
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: ${theme.spacings.xsmall};
    filter: ${darkMode ? 'brightness(0.85)' : 'none'};
    transition: filter 300ms ease-in-out;

    @media ${theme.media.lteMedium} {
      max-width: 350px;
    }

    @media ${theme.media.lteSmall} {
      max-width: 280px;
    }

    @media ${theme.media.iphone} {
      max-width: 220px;
      margin: 0 auto;
      display: block;
    }

    @media (max-width: 325px) and (max-height: 852px) {
      max-width: 180px;
    }
  `}
`;

export const ToggleButton = styled.button`
  ${({ theme }) => css`
    position: fixed;
    bottom: ${theme.spacings.medium};
    right: ${theme.spacings.medium};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;
    transition: all 300ms ease-in-out;

    &:hover {
      background: ${theme.colors.secondaryColor};
      transform: scale(1.05);
    }

    @media ${theme.media.iphone} {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      bottom: ${theme.spacings.small};
      right: ${theme.spacings.small};
    }

    @media (max-width: 325px) and (max-height: 852px) {
      padding: ${theme.spacings.xxsmall || '0.4rem'} ${theme.spacings.xsmall};
      bottom: ${theme.spacings.xsmall};
      right: ${theme.spacings.xsmall};
      font-size: ${theme.fonts.sizes.xsmall};
      
    }
  `}
`;
