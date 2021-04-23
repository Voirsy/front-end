import Styled from './styles';
import { LabelProps } from './types';

const Label = ({
  variant = 'default',
  children,
  inputValue,
  htmlFor,
  inputHeight,
  type,
}: LabelProps) => (
  <Styled.Label
    type={type}
    variant={variant}
    inputValue={inputValue}
    htmlFor={htmlFor}
    inputHeight={inputHeight}
    className={`${
      variant === 'login' || variant === 'placeholder' || variant === 'search'
        ? 'visually-hidden'
        : ''
    }`}
  >
    {children}
  </Styled.Label>
);

export default Label;
