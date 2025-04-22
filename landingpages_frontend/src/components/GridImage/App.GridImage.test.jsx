import { screen } from '@testing-library/react';
import { GridImage } from './GridImage';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render', () => {
    // Certifique-se de que mock contém title, description e grid
    renderTheme(<GridImage {...mock}>Children</GridImage>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
