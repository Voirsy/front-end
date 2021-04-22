export type StyledTextFieldProps = {
  variant?: 'default' | 'withDisable' | 'login' | 'placeholder' | 'animate' | 'search';
  inputHeight?: number;
  inputWidth?: number;
};

export type TextFieldProps = StyledTextFieldProps & {
  name: string;
  label: string;
  type?: 'text' | 'password' | 'email' | 'search';
  disabled?: boolean;
  placeholder?: string;
  isPassword?: boolean;
  isEmail?: boolean;
};
