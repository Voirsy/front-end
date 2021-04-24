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
              icon={
                isPasswordVisible ? (
                  <FiEye color={theme.colors.grayColors.light} />
                ) : (
                  <FiEyeOff color={theme.colors.grayColors.light} />
                )
              }
              isPrimary={false}
              borderWidth={0}
              buttonSize={inputHeight * 0.8}
              iconWidth={1}
              onClick={changePasswordVisibility}
              isAdjustedToParent
            />
          ) : (
            <IconButton
              aria-label="Go next"
              icon={<FiArrowRight color={theme.colors.white} />}
              buttonSize={inputHeight * 0.8}
              onClick={() => {}}
              isAdjustedToParent
            />
          )}
        </Styled.ButtonWrapper>
      )}
    </Styled.InputWrapper>
  );
};

export default Input;
