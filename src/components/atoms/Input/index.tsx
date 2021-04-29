import { useState } from 'react';
import { FiArrowRight, FiEye, FiEyeOff, FiSearch } from 'react-icons/fi';
import { InputProps } from './types';
import Styled from './styles';
import IconButton from '../IconButton';
import theme from '../../../theme/theme';

const Input = ({
  name,
  variant = 'default',
  type = 'text',
  inputHeight = 3.5,
  inputWidth = 30,
  isPassword = false,
  isEmail = false,
  disabled = false,
  ...rest
}: InputProps) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const changePasswordVisibility = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  return (
    <Styled.InputWrapper>
      {variant === 'search' && (
        <Styled.IconWrapper inputHeight={inputHeight}>
          <FiSearch />
        </Styled.IconWrapper>
      )}
      <Styled.Input
        type={isPassword ? (isPasswordVisible ? 'text' : 'password') : type}
        variant={variant}
        inputHeight={inputHeight}
        inputWidth={inputWidth}
        disabled={disabled}
        {...rest}
      />
      {(isPassword || isEmail) && (
        <Styled.ButtonWrapper inputHeight={inputHeight}>
          {isPassword ? (
            <IconButton
              aria-controls={!isEmail && name}
              aria-expanded={!isEmail && isPasswordVisible}
              aria-label="Show password"
              size={inputHeight * 0.75}
              iconWidth={1}
              onClick={changePasswordVisibility}
              color="secondary"
            >
              {isPasswordVisible ? (
                <FiEye size="60%" color={theme.colors.grayColors.light} />
              ) : (
                <FiEyeOff size="60%" color={theme.colors.grayColors.light} />
              )}
            </IconButton>
          ) : (
            <IconButton
              aria-label="Go next"
              size={inputHeight * 0.6}
              onClick={() => {}}
              variant="contained"
              iconWidth={3}
            >
              <FiArrowRight size="80%" color={theme.colors.white} />
            </IconButton>
          )}
        </Styled.ButtonWrapper>
      )}
    </Styled.InputWrapper>
  );
};

export default Input;
