import { NavLinks } from './NavLinks';
import links from './mock';
export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
