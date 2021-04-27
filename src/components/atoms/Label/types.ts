import { InputType, Variant } from '../../../types/global';

export interface StyledLabelProps {
  type: InputType;
  variant: Variant;
  inputValue: string;
  inputHeight: number;
}

export interface LabelProps extends StyledLabelProps {
  children: string;
  htmlFor: string;
}
