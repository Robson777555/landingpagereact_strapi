import { screen } from '@testing-library/react';
import { NavLinks } from './NavLinks';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';
import mock from './mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks links={[]} />);
    expect(screen.queryAllByRole('link')).toHaveLength(0); // 🛠️ Corrigido
  });

  it('should render links media queries', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'flex-flow': 'row wrap',
    });
  });

  it('should not render any links when links array is empty', () => {
    renderTheme(<NavLinks links={[]} />);
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('should render with default links prop', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
