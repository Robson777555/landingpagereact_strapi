import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { screen } from '@testing-library/react';
import { Heading } from './Heading';
import { describe, it, expect } from '@jest/globals';
import 'jest-styled-components';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
      media: '(max-width: 768px)',
    });
  });

  it('should render with upercase letters', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correect heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');
    expect(heading).toBeInTheDocument();
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should render with small size', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('should render with medium size', () => {
    renderTheme(<Heading size="medium">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });
  });

  it('should render with big size', () => {
    renderTheme(<Heading size="big">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>texto</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
