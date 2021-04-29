const argTypes = {
  variant: {
    description: 'Variant of the textfield',
    control: {
      type: 'radio',
      options: ['default', 'withDisable', 'login', 'placeholder', 'animate', 'search'],
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'default' },
    },
    defaultValue: 'default',
  },
  label: {
    table: {
      type: { summary: 'string' },
      category: 'text',
    },
  },
  name: {
    description: 'Name of input. Name is also used for `id` and `htmlFor`',
    table: {
      type: { summary: 'string' },
      category: 'text',
    },
  },
  type: {
    description: 'Type of input',
    control: {
      type: 'radio',
      options: ['text', 'password', 'email', 'search', 'textarea'],
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'text' },
    },
    defaultValue: 'text',
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
  isEmail: {
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'conditions',
    },
  },
  isPassword: {
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'conditions',
    },
  },
};

export default argTypes;
