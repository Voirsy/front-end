import { Story, Meta } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from './index';
import argTypes from './storieArgTypes';
import { TextFieldProps } from './types';

const FormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Field is required'),
  address: Yup.string().required('Field is required'),
  salonName: Yup.string().required('Field is required'),
  fullname: Yup.string().required('Field is required'),
  password: Yup.string().required('Field is required'),
  service_name: Yup.string().required('Field is required'),
  search: Yup.string().required('Field is required'),
  opinion: Yup.string().required('Field is required'),
});

const initialValues = {
  address: 'Stalowa, 11, 52, 03-425, Warszawa, Praga-Północ',
  salonName: 'Black Cat Beauty & Spa Praga Północ',
  fullname: '',
  password: '',
  email: '',
  service_name: '',
  search: '',
  opinion: '',
};

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes,
  decorators: [
    (S) => (
      <Formik initialValues={initialValues} validationSchema={FormSchema} onSubmit={() => {}}>
        {S()}
      </Formik>
    ),
  ],
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
  type: 'password',
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
