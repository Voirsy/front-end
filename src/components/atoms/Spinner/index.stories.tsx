import { Story, Meta } from '@storybook/react/types-6-0';
import Spinner from './index';
import { SpinnerProps } from './types';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      description: 'Size of spinner. Always pass value with unit e.g.: `25px`, `70%` or `4rem`',
      defaultValue: '3rem',
    },
    color: {
      description: 'Color of spinner',
      defaultValue: 'primary',
    },
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  size: '50px',
  color: 'secondary',
};
