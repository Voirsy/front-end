import Styled from './styles';
import { LabelProps } from './types';

const Label = ({
  variant = 'default',
  children,
  inputValue,
  htmlFor,
  inputHeight,
  type,
}: LabelProps) => {
  const labelClass =
    variant === 'login' || variant === 'placeholder' || variant === 'search'
      ? 'visually-hidden'
      : '';

  return (
    <Styled.Label
      type={type}
      variant={variant}
      inputValue={inputValue}
      htmlFor={htmlFor}
      inputHeight={inputHeight}
      className={labelClass}
    >
      {children}
    </Styled.Label>
  );
};

export default Label;
