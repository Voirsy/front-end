export type StyledLabelProps = {
  variant: 'default' | 'withDisable' | 'login' | 'placeholder' | 'animate' | 'search';
  inputValue: string;
  inputHeight: number;
};

export type LabelProps = StyledLabelProps & {
  children: string;
  htmlFor: string;
};
