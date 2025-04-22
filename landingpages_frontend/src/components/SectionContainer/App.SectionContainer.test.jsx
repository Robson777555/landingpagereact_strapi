import { screen } from '@testing-library/react';
import { SectionContainer } from './SectionContainer';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
