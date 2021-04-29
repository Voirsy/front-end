import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox from './index';
import { CheckboxProps } from './types';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    name: {
      description: 'Name of input. Name is also used for `id` and `htmlFor`',
    },
    size: {
      description: "Width and height of CHECKBOX! in rem's ",
    },
    children: {
      description: 'Input label',
    },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'I want to create businness account',
  name: 'isBusinessAccount',
};
