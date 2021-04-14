import { Story, Meta } from '@storybook/react/types-6-0';
import Button from './index';
import { Props as ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      description: 'Main label of the button',
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
    isPrimaryColor: {
      description:
        'Whenever the color of the text, border and icon should be purple. It should be pass only when button is not primary',
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
  ariaLabel: 'Cancel removing crew member',
  isPrimary: false,
  size: 'large',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Delete',
  ariaLabel: 'Remove crew member',
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
  ariaLabel: 'Back to step 2',
  isPrimary: false,
  border: false,
};

export const WithPrimaryColor = Template.bind({});
WithPrimaryColor.args = {
  label: 'Save',
  ariaLabel: 'Save changes',
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
  ariaLabel: 'Add new service',
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

export const IsSocial = Template.bind({});
IsSocial.args = {
  label: 'Continue with Google',
  isSocial: true,
};
