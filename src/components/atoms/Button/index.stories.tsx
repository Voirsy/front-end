import { Story, Meta } from '@storybook/react/types-6-0';
import Button from './index';
import { ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'Main label of the button',
    },
    type: {
      control: 'select',
    },
    borderRadius: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 0.05,
      },
      description: "Value in rem's",
    },
    isBold: {
      description: "When it's `true` `font-weight` is 700 otherwise 500",
    },
    fontSize: {
      description: "Font-size of button text given in rem's",
    },
  },
  decorators: [
    (S) => (
      <div style={{ width: '22rem', height: '3.8rem' }}>
        <S />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Add',
  variant: 'contained',
  width: 15,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Cancel',
  color: 'secondary',
  variant: 'outlined',
  height: 5,
  width: 20,
  borderRadius: 0.5,
  'aria-label': 'Cancel removing crew member',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Delete',
  color: 'warning',
  variant: 'contained',
  height: 5,
  width: 20,
  borderRadius: 0.5,
  'aria-label': 'Remove crew member',
};

export const SmallWarning = Template.bind({});
SmallWarning.args = {
  children: 'Delete salon',
  color: 'warning',
  variant: 'outlined',
  height: 3,
  width: 10,
  borderRadius: 0.5,
};

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
  children: 'Back',
  color: 'secondary',
  width: 12,
  'aria-label': 'Back to step 2',
};

export const WithPrimaryColor = Template.bind({});
WithPrimaryColor.args = {
  children: 'Save',
  width: 6,
  height: 3,
  'aria-label': 'Save changes',
};

export const WithPrimaryColorAndBorder = Template.bind({});
WithPrimaryColorAndBorder.args = {
  children: '+ Add',
  variant: 'outlined',
  'aria-label': 'Add new service',
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  children: '+ Add',
  isLoading: true,
  variant: 'contained',
  color: 'secondary',
  iconColor: 'lightblue',
};

export const SignIn = Template.bind({});
SignIn.args = {
  children: 'Sign in',
  variant: 'contained',
  width: 15,
  height: 5,
  'aria-label': 'Sign in to Voirsy',
  borderRadius: 50,
  fontSize: 2,
};

export const IsSocial = Template.bind({});
IsSocial.args = {
  children: 'Continue with Google',
  width: 30,
  borderRadius: 50,
  fontSize: 1.4,
  isSocial: true,
};
