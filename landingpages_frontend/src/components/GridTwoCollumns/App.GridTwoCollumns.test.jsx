import { screen } from '@testing-library/react';
import { GridTwoCollumns } from './GridTwoCollumns';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';
import mock from './mock';
describe('<GridTwoCollumns />', () => {
  it('should render two columns grid', () => {
    const { container } = renderTheme(<GridTwoCollumns {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
