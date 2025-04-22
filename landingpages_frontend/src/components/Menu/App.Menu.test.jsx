import { screen, fireEvent } from '@testing-library/react';
import { Menu } from './Menu';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';
import linksMock from '../NavLinks/mock';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button to open and close the menu', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toBeInTheDocument();
    expect(menuContainer).toBeInTheDocument();
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(container.querySelector('button')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
