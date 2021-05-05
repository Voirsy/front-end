import { useField } from 'formik';
import { TextFieldProps } from './types';
import Styled from './styles';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import Textarea from '../../atoms/Textarea';

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
  handleChange = () => {},
  handleKeyDown = () => {},
}: TextFieldProps) => {
  const [field, meta] = useField(name);
  return (
    <Styled.Wrapper variant={variant}>
      <Label
        type={type}
        htmlFor={name}
        variant={variant}
        inputValue={meta.value}
        inputHeight={inputHeight}
      >
        {label}
      </Label>
      {type !== 'textarea' ? (
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
          onKeyDown={handleKeyDown}
          {...field}
          onChange={(e) => {
            field.onChange(e);
            handleChange(e);
          }}
        />
      ) : (
        <Textarea inputHeight={inputHeight} inputWidth={inputWidth} {...field} />
      )}
      <Styled.ErrorMessage role="alert">{meta.touched && meta.error}</Styled.ErrorMessage>
    </Styled.Wrapper>
  );
};

export default TextField;
