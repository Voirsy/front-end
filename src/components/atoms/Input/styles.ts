import styled, { css } from 'styled-components';
import { StyledButtonWrapperProps, StyledInputProps } from './types';

const Input = styled.input.attrs<StyledInputProps>(({ variant }) => ({
  borderRadius: variant === 'login' || variant === 'search' ? 5 : variant === 'default' ? 1 : 0.5,
}))<StyledInputProps & { borderRadius?: string }>`
  border-radius: ${({ borderRadius }) => `${borderRadius}rem`};
  width: ${({ inputWidth }) => `${inputWidth}rem`};
  height: ${({ inputHeight }) => `${inputHeight}rem`};
  padding: 0 0.7rem 0 0;

  ${({ variant, theme, inputHeight }) => css`
    border: ${variant === 'search' ? '0' : '1px'} solid
      ${variant === 'login' ? theme.colors.grayColors.light : theme.colors.blueOutline.normal};
    padding-left: ${variant === 'login' ? '1.2rem' : '0.7rem'};

    ${(variant === 'animate' || variant === 'placeholder') &&
    css`
      font-family: ${theme.fonts.montserrat};
    `}

    ${variant === 'search' &&
    css`
      padding-left: ${inputHeight}rem;
    `}

    font-size: ${variant === 'login' ? '1.3' : '1.6'}rem;
    background: ${variant === 'search' ? theme.colors.blueOutline._030 : theme.colors.white};
    transition: background-color 100ms ease-in-out, border-color 100ms ease-in-out;

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

    :hover:not(:disabled),
    :focus {
      background-color: ${variant !== 'search'
        ? theme.colors.blueOutline._030
        : theme.colors.blueOutline._050};
    }
  `}
`;

const InputWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const IconWrapper = styled.div<StyledButtonWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ inputHeight }) => `${inputHeight}rem`};
  width: ${({ inputHeight }) => `${inputHeight}rem`};
  display: grid;
  place-items: center;

  & > svg {
    width: 65%;
    height: 65%;
    stroke: ${({ theme }) => theme.colors.grayColors.dark};
  }
`;

const ButtonWrapper = styled.div<StyledButtonWrapperProps>`
  position: absolute;
  background-color: transparent;
  z-index: 2;
  display: grid;
  place-items: center;
  top: 0;
  right: 0;
  ${({ inputHeight }) => css`
    height: ${inputHeight}rem;
    width: ${inputHeight}rem;
  `}
`;

const Styled = { Input, InputWrapper, ButtonWrapper, IconWrapper };

export default Styled;
