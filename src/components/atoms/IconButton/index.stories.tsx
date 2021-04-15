import { Story, Meta } from '@storybook/react/types-6-0';
import { FiX, FiArrowRight, FiCheck, FiHeart, FiCamera } from 'react-icons/fi';
import { BiCurrentLocation } from 'react-icons/bi';
import IconButton from './index';
import { IconButtonProps } from './types';
import theme from '../../../theme/theme';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    type: {
      control: 'select',
      defaultValue: 'button',
    },
    size: {
      description: "Size of button given in rem's",
    },
    iconWidth: {
      description: "Stroke-width of icon given in px's",
    },
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ariaLabel: 'Find my current location',
  buttonSize: 3.8,
  iconWidth: 0,
  icon: <BiCurrentLocation style={{ fill: theme.colors.white }} />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ariaLabel: 'Close sign up form',
  isPrimary: false,
  buttonSize: 8,
  icon: <FiX size="50%" />,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  ariaLabel: 'Go further',
  buttonSize: 2.5,
  iconWidth: 2.5,
  icon: <FiArrowRight />,
};

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
  ariaLabel: 'Confirm changes',
  isPrimary: false,
  isBorder: false,
  buttonSize: 3.2,
  iconWidth: 3,
  icon: <FiCheck size="100%" />,
};

export const Heart = Template.bind({});
Heart.args = {
  ariaLabel: 'Add to favorites',
  isPrimary: false,
  isBorder: false,
  buttonSize: 2.4,
  iconWidth: 1,
  icon: <FiHeart size="100%" />,
};

export const LargeCamera = Template.bind({});
LargeCamera.args = {
  ariaLabel: 'Add photo',
  isBorder: false,
  buttonSize: 10,
  primaryColor: theme.colors.blueOutline.normal,
  icon: <FiCamera size="40%" color={theme.colors.grayColors.dark} />,
};

export const SmallCamera = Template.bind({});
SmallCamera.args = {
  ariaLabel: 'Update your profile photo',
  isBorder: false,
  buttonSize: 4,
  primaryColor: theme.colors.grayColors.dark,
  iconWidth: 1,
  icon: <FiCamera size="70%" />,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  ariaLabel: 'Open menu',
  isAvatar: true,
  avatarUrl:
    'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
};

export const WithDefaultAvatar = Template.bind({});
WithDefaultAvatar.args = {
  ariaLabel: 'Open menu',
  isAvatar: true,
};
