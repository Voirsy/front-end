import { InputType, Variant } from '../../../types/global';

export interface StyledButtonWrapperProps {
  inputHeight: number;
}

export interface StyledInputProps extends StyledButtonWrapperProps {
  variant?: Variant;
  inputWidth: number;
}

export interface InputProps extends StyledInputProps {
  id: string;
  name: string;
  type?: InputType;
  disabled?: boolean;
  placeholder?: string;
  isPassword?: boolean;
  isEmail?: boolean;
}
