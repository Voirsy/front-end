import { Story, Meta } from '@storybook/react/types-6-0';
import Button from './index';
import { Props as ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  isPrimary: true,
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  isDanger: true,
};
