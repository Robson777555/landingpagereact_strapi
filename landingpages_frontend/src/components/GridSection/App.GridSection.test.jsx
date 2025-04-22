import { GridSection } from './GridSection';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';
import mock from './mock';

describe('<GridSection />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridSection {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it('should render grid section', () => {
    const { container } = renderTheme(
      <GridSection {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
