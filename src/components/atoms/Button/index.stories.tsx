import { Story, Meta } from '@storybook/react/types-6-0';
import Button from './index';
import { ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      description: 'Main label of the button',
    },
    isPrimary: {
      description:
        "Determines that button should be primary. When isn't primary `background` is `transparent`, color of font and border take the primary color",
    },
    size: {
      control: 'select',
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
    isWarning: {
      description: "When it's `true` the primary color of the button is red",
    },
    isBold: {
      description: "When it's `true` `font-weight` is 700 otherwise 500",
    },
    border: {
      description: "When it's `true` `border` is 1px otherwise 0px",
    },
    isPrimaryColor: {
      description:
        'Whenever the color of the text, border and icon should be purple. It should be pass only when button is not primary',
    },
    fontSize: {
      description: "Font-size of button text given in rem's",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Add',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Cancel',
  'aria-label': 'Cancel removing crew member',
  isPrimary: false,
  size: 'large',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Delete',
  'aria-label': 'Remove crew member',
  isWarning: true,
  size: 'large',
};

export const SmallWarning = Template.bind({});
SmallWarning.args = {
  label: 'Delete salon',
  isPrimary: false,
  isWarning: true,
  size: 'verysmall',
};

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
  label: 'Back',
  'aria-label': 'Back to step 2',
  isPrimary: false,
  border: false,
};

export const WithPrimaryColor = Template.bind({});
WithPrimaryColor.args = {
  label: 'Save',
  'aria-label': 'Save changes',
  size: 'verysmall',
  isPrimary: false,
  border: false,
  isPrimaryColor: true,
  isBold: true,
  buttonWidth: 50,
};

export const WithPrimaryColorAndBorder = Template.bind({});
WithPrimaryColorAndBorder.args = {
  label: '+ Add',
  'aria-label': 'Add new service',
  size: 'medium',
  isPrimary: false,
  isBold: true,
  isPrimaryColor: true,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  label: '+ Add',
  size: 'medium',
  isLoading: true,
};

export const SignIn = Template.bind({});
SignIn.args = {
  label: 'Sign in',
  'aria-label': 'Sign in to Voirsy',
  borderRadius: 50,
  fontSize: 2,
};

export const IsSocial = Template.bind({});
IsSocial.args = {
  label: 'Continue with Google',
  isSocial: true,
};
