import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/global-styles';

const preview = {
  parameters: {
    backgrounds: {
      disable: false,
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.white, // #FFFFFF
        },
        {
          name: 'dark',
          value: theme.colors.primaryColor, // #0A1128
        },
      ],
    },
  },
};

export const decorators = [
  // eslint-disable-next-line
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
