import { useState } from 'react';
import { FiArrowRight, FiEye, FiEyeOff } from 'react-icons/fi';
import { InputProps } from './types';
import Styled from './styles';
import IconButton from '../IconButton';
import theme from '../../../theme/theme';

const Input = ({
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
      <Styled.Input
        type={isPassword ? (isPasswordVisible ? 'text' : 'password') : type}
        variant={variant}
        inputHeight={inputHeight}
        inputWidth={inputWidth}
        disabled={disabled}
        {...rest}
      />
      <Styled.ButtonWrapper inputHeight={inputHeight}>
        {(isPassword || isEmail) && (
          <IconButton
            icon={
              isEmail ? (
                <FiArrowRight color={theme.colors.white} />
              ) : isPasswordVisible ? (
                <FiEye color={theme.colors.grayColors.light} />
              ) : (
                <FiEyeOff color={theme.colors.grayColors.light} />
              )
            }
            ariaLabel={isEmail ? 'Go next' : 'Show password'}
            isPrimary={isEmail}
            borderWidth={isEmail ? 1 : 0}
            buttonSize={inputHeight * 0.8}
            iconWidth={isEmail ? 2 : 1}
            onClick={isEmail ? () => {} : changePasswordVisibility}
            isAdjustedToParent
          />
        )}
      </Styled.ButtonWrapper>
    </Styled.InputWrapper>
  );
};

export default Input;
