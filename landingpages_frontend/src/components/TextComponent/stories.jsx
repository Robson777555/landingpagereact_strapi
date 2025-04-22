import { TextComponent } from './TextComponent';

export default {
  title: 'TextComponent', // Título do componente no Storybook
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nihil unde quod veritatis quam, exercitationem odit totam. Distinctio,
    repudiandae? Suscipit,
    maiores libero temporibus incidunt sunt rem asperiores fugiat quaerat amet cupiditate?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

// História principal (irá aparecer como "Template" no Storybook)
export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
