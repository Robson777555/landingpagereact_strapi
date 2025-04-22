import { LogoLink } from './LogoLink';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo',
    srcImg: 'public/assets/images/logo.svg',
    link: 'https://www.google.com',
  },
};

export const Template = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
TextOnly.args = {
  srcImg: '',
};
