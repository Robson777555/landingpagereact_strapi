import { GridTwoCollumns } from './GridTwoCollumns';
import mock from './mock';
export default {
  title: 'GridTwoCollumns',
  component: GridTwoCollumns,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoCollumns {...args} />
    </div>
  );
};
