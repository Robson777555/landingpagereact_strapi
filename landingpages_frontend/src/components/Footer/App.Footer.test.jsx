import { screen } from '@testing-library/react';
import { Footer } from './Footer';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
