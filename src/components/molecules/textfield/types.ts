import { InputType, Variant } from '../../../types/global';

export interface StyledTextFieldProps {
  variant?: Variant;
  inputHeight?: number;
  inputWidth?: number;
}

export interface TextFieldProps extends StyledTextFieldProps {
  name: string;
  label: string;
  type?: InputType;
  disabled?: boolean;
  placeholder?: string;
  isPassword?: boolean;
  isEmail?: boolean;
}
