import { useField } from 'formik';
import { TextFieldProps } from './types';
import Styled from './styles';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

const TextField = ({
  name,
  label,
  placeholder = '',
  variant = 'default',
  type = 'text',
  inputHeight = 3.5,
  inputWidth = 30,
  disabled = false,
  isEmail = false,
  isPassword = false,
}: TextFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <Styled.Wrapper variant={variant}>
      <Label variant={variant} htmlFor={name} inputValue={meta.value} inputHeight={inputHeight}>
        {label}
      </Label>
      <Input
        disabled={disabled}
        id={name}
        variant={variant}
        inputHeight={inputHeight}
        inputWidth={inputWidth}
        placeholder={placeholder}
        type={type}
        isEmail={isEmail}
        isPassword={isPassword}
        {...field}
      />
    </Styled.Wrapper>
  );
};

export default TextField;
