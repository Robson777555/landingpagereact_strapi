import { screen } from '@testing-library/react';
import { TextComponent } from './TextComponent';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from '@jest/globals';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
