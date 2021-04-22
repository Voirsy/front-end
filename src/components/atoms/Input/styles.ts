import styled, { css } from 'styled-components';
import { StyledButtonWrapperProps, StyledInputProps } from './types';

const Input = styled.input.attrs<StyledInputProps>(({ variant }) => ({
  borderRadius: variant === 'login' || variant === 'search' ? 5 : variant === 'default' ? 1 : 0.5,
}))<StyledInputProps & { borderRadius?: string }>`
  border-radius: ${({ borderRadius }) => `${borderRadius}rem`};
  width: ${({ inputWidth }) => `${inputWidth}rem`};
  height: ${({ inputHeight }) => `${inputHeight}rem`};
  outline: none;

  ${({ variant, theme }) => css`
    border: ${variant === 'search' ? '0' : '1px'} solid ${theme.colors.blueOutline.normal};
    padding: ${variant === 'login' ? '0 0 0 1.2rem' : '0 0.7rem'};
    font-size: ${variant === 'login' ? '1.3' : '1.6'}rem;
    background: ${variant === 'search' ? theme.colors.blueOutline._030 : theme.colors.white};

    ::placeholder {
      color: ${variant === 'login'
        ? theme.colors.grayColors.light063
        : theme.colors.grayColors.dark};
    }

    :disabled {
      background-color: ${theme.colors.blueOutline._050};
      border: 0;
      color: ${theme.colors.grayColors.dark};
    }
  `}
`;

const InputWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const ButtonWrapper = styled.div.attrs<StyledButtonWrapperProps>(({ inputHeight }) => ({
  height: inputHeight! * 0.6,
}))<StyledButtonWrapperProps & { height?: number }>`
  position: absolute;
  ${({ inputHeight, height }) => css`
    height: ${height}rem;
    width: ${height}rem;
    top: ${(inputHeight! - height!) / 2}rem;
    right: ${(inputHeight! - height!) / 2}rem;
  `}
`;

const Styled = { Input, InputWrapper, ButtonWrapper };

export default Styled;
