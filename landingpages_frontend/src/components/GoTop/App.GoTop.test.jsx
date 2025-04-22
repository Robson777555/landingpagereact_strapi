import { screen } from '@testing-library/react';
import { GoTop } from './GoTop';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';

describe('<GoTop />', () => {
  it('should render the GoTop link', () => {
    renderTheme(<GoTop />);
    const linkElement = screen.getByRole('link', { name: /go to top/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '#');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GoTop />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
