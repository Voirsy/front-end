export type StyledLabelProps = {
  type: 'text' | 'password' | 'email' | 'search' | 'textarea';
  variant: 'default' | 'withDisable' | 'login' | 'placeholder' | 'animate' | 'search';
  inputValue: string;
  inputHeight: number;
};

export type LabelProps = StyledLabelProps & {
  children: string;
  htmlFor: string;
};
