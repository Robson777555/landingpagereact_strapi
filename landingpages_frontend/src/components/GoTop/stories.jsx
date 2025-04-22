import { GoTop } from './GoTop';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta
        accusamus voluptatibus voluptas ad placeat laborum sed excepturi.
        Repellendus porro alias voluptate libero tempora ad rerum, soluta
        accusamus sit deserunt.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta
        accusamus voluptatibus voluptas ad placeat laborum sed excepturi.
        Repellendus porro alias voluptate libero tempora ad rerum, soluta
        accusamus sit deserunt.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta
        accusamus voluptatibus voluptas ad placeat laborum sed excepturi.
        Repellendus porro alias voluptate libero tempora ad rerum, soluta
        accusamus sit deserunt.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta
        accusamus voluptatibus voluptas ad placeat laborum sed excepturi.
        Repellendus porro alias voluptate libero tempora ad rerum, soluta
        accusamus sit deserunt.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta
        accusamus voluptatibus voluptas ad placeat laborum sed excepturi.
        Repellendus porro alias voluptate libero tempora ad rerum, soluta
        accusamus sit deserunt.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta
        accusamus voluptatibus voluptas ad placeat laborum sed excepturi.
        Repellendus porro alias voluptate libero tempora ad rerum, soluta
        accusamus sit deserunt.
      </p>
      <GoTop {...args} />
    </div>
  );
};
