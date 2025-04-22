import { screen } from '@testing-library/react';
import { SectionBackground } from './SectionBackground';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
