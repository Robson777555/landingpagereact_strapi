import { Base } from './Base';
import mockBase from './mockWithChildren.jsx'; // agora está correto

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => <Base {...args} />;
