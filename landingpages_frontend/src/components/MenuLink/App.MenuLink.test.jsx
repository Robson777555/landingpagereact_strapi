import { screen } from '@testing-library/react';
import { MenuLink } from './MenuLink';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://www.google.com">Children</MenuLink>); // Corrigido 'Link' para 'link'
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://www.google.com" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://www.google.com" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
