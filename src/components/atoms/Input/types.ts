export type StyledButtonWrapperProps = {
  inputHeight?: number;
};

export type StyledInputProps = StyledButtonWrapperProps & {
  variant?: 'default' | 'withDisable' | 'login' | 'placeholder' | 'animate' | 'search';
  inputWidth?: number;
};

export type InputProps = StyledInputProps & {
  id: string;
  value?: string;
  type?: 'text' | 'password' | 'email' | 'search';
  disabled?: boolean;
  placeholder?: string;
  isPassword?: boolean;
  isEmail?: boolean;
};
