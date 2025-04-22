import { screen } from '@testing-library/react';
import { LogoLink } from './LogoLink';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    // eslint-disable-next-line
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(screen.getByRole('img', { name: 'Olá mundo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });
});
