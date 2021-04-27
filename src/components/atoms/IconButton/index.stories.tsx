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
      description:
        "Size of button given in rem's. When `size` isn't pass to component it will be adjust to parent component.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100%' },
      },
    },
    borderRadius: {
      description: "Value in rem's",
    },
    variant: {
      description: 'Variant of IconButton',
    },
    color: {
      description: 'Primary color of IconButton',
    },
    iconWidth: {
      description: "Stroke-width of icon given in px's",
    },
    isAvatar: {
      description:
        'When `isAvatar` is set to `true` IconButton comes in avatar mode and instead of icon it displays user avatar which have to be pass in avatarUrl. If avatarUrl has not been passed, default icon is displaying.',
    },
    avatarUrl: {
      description: 'Link to user avatar stored on server.',
    },
    children: {
      description:
        "Icon imported from `react-icons`. If it's possible import only Feather(fi) icons to keep consistent look of icons.",
    },
  },
  decorators: [(S) => <div style={{ width: '4rem', height: '4rem' }}>{S()}</div>],
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <FiCheck size="80%" />,
  'aria-label': 'Confirm changes',
  size: 3,
  color: 'secondary',
  iconWidth: 3,
};

export const Contained = Template.bind({});
Contained.args = {
  children: <BiCurrentLocation />,
  'aria-label': 'Find my current location',
  size: 3.5,
  variant: 'contained',
  iconWidth: 0.5,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <FiX size="50%" />,
  'aria-label': 'Close sign up form',
  size: 7,
  variant: 'outlined',
  color: 'secondary',
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  children: <FiArrowRight />,
  'aria-label': 'Go further',
  size: 2.5,
  variant: 'contained',
  iconWidth: 3,
};

export const Heart = Template.bind({});
Heart.args = {
  children: <FiHeart size="80%" color={theme.colors.grayColors.heartIcon} />,
  'aria-label': 'Add to favorites',
  size: 2.5,
  color: 'secondary',
  borderRadius: 0.5,
  iconWidth: 1,
};

export const LargeCamera = Template.bind({});
LargeCamera.args = {
  children: <FiCamera size="40%" color={theme.colors.grayColors.dark} />,
  'aria-label': 'Add photo',
  size: 8,
  variant: 'contained',
  color: 'lightblue',
};

export const SmallCamera = Template.bind({});
SmallCamera.args = {
  children: <FiCamera size="70%" />,
  'aria-label': 'Update your profile photo',
  variant: 'contained',
  color: 'secondary',
  iconWidth: 1,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  'aria-label': 'Open menu',
  isAvatar: true,
  avatarUrl:
    'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
};

export const WithDefaultAvatar = Template.bind({});
WithDefaultAvatar.args = {
  'aria-label': 'Open menu',
  isAvatar: true,
};
