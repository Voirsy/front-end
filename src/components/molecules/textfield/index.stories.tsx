import { Story, Meta } from '@storybook/react/types-6-0';
// eslint-disable-next-line import/no-extraneous-dependencies
import withFormik from 'storybook-formik';
import TextField from './index';
import { TextFieldProps } from './types';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    name: {
      description: 'Name of input. Name is also used for `id` and `htmlFor`',
      table: {
        type: { summary: 'string' },
        category: 'text',
      },
    },
    label: {
      table: {
        type: { summary: 'string' },
        category: 'text',
      },
    },
    placeholder: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: 'text',
      },
    },
    inputWidth: {
      description: "Width of input given in rem's",
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 30 },
        category: 'size',
      },
    },
    inputHeight: {
      description: "Height of input given in rem's",
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3.5 },
        category: 'size',
      },
    },
    disabled: {
      description: 'Determines when input is disable or not',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'conditions',
      },
    },
  },
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        address: 'Stalowa, 11, 52, 03-425, Warszawa, Praga-Północ',
        salonName: 'Black Cat Beauty & Spa Praga Północ',
        fullname: '',
        password: '',
        email: '',
        service_name: '',
        search: '',
        opinion: '',
      },
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'address',
  label: 'Address',
  inputWidth: 50,
};

export const WithDisable = Template.bind({});
WithDisable.args = {
  name: 'salonName',
  label: 'Name',
  variant: 'withDisable',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'salonName',
  label: 'Name',
  disabled: true,
  variant: 'withDisable',
};

Disabled.storyName = 'With Disable - disabled';

export const Login = Template.bind({});
Login.args = {
  name: 'fullname',
  label: 'Fullname',
  variant: 'login',
  placeholder: 'Fullname',
};

export const Password = Template.bind({});
Password.args = {
  name: 'password',
  label: 'Password',
  variant: 'login',
  isPassword: true,
  placeholder: 'Password',
};

export const Email = Template.bind({});
Email.args = {
  name: 'email',
  label: 'Email',
  type: 'email',
  variant: 'login',
  isEmail: true,
  placeholder: 'Email',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  name: 'service_name',
  label: 'Service name',
  variant: 'placeholder',
  placeholder: 'Service name',
};

export const Animate = Template.bind({});
Animate.args = {
  name: 'fullname',
  label: 'Fullname',
  variant: 'animate',
  inputHeight: 4,
};

export const Search = Template.bind({});
Search.args = {
  name: 'search',
  label: 'Search',
  type: 'search',
  placeholder: 'Search',
  variant: 'search',
};

export const Textarea = Template.bind({});
Textarea.args = {
  name: 'opinion',
  label: 'Opinion',
  type: 'textarea',
  inputHeight: 10,
  inputWidth: 40,
  variant: 'animate',
};
