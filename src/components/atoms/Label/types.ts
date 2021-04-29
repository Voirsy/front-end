import { InputType, Variant } from '../../../types/global';

interface SharedProps {
  type: InputType;
  variant: Variant;
  inputValue: string;
  inputHeight: number;
}

export interface StyledLabelProps extends SharedProps {
  percentages?: number;
  positionFromTop?: number;
}

export interface LabelProps extends StyledLabelProps {
  children: string;
  htmlFor: string;
}
