import { Story, Meta } from '@storybook/react/types-6-0';
import Spinner from './index';
import { SpinnerProps } from './types';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  size: '50px',
  color: 'secondary',
};
