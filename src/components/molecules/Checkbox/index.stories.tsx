import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox from './index';
import { CheckboxProps } from './types';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'I want to create businness account',
  name: 'isBusinessAccount',
};
