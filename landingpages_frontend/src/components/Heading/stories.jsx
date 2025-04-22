import { Heading } from './Heading';
import { theme } from '../../styles/theme';

export default {
  title: 'Heading',
  component: Heading,
  // Remova o "args" padrão para evitar conflito
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Edite este texto', // Texto placeholder nos controles
    },
    colorDark: {
      type: 'boolean',
    },
  },
};

// Light Mode (texto escuro + fundo branco)
export const Light = (args) => (
  <Heading
    {...args}
    colorDark={true}
    children={args.children || 'Texto escuro'} // Texto padrão se vazio
  />
);

// Dark Mode (texto branco + fundo escuro)
export const Dark = (args) => (
  <Heading
    {...args}
    colorDark={false}
    children={args.children || 'Texto claro'} // Texto padrão se vazio
  />
);

Light.parameters = {
  backgrounds: {
    default: 'light',
    values: [{ name: 'light', value: theme.colors.white }],
  },
};

Dark.parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: theme.colors.primaryColor }],
  },
};
