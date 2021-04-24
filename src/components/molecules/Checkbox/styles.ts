import styled from 'styled-components';
import { StyledCheckboxProps } from './types';

const Wrapper = styled.div<StyledCheckboxProps>`
  width: fit-content;
  display: grid;
  grid-template-columns: ${({ $size }) => $size}rem 1fr;
  grid-gap: 1rem;
  align-items: center;
`;

const CheckboxBase = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Checkbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 0.5rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.grayColors.dark};
  background-color: ${({ theme }) => theme.colors.grayColors.dark};
  overflow: hidden;
  transition: border-color 150ms ease-in-out, background-color 150ms ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 150ms ease-in-out, border-radius 50ms ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
  }

  ${CheckboxBase}:checked + &::after {
    transform: scale(0);
    border-radius: 50%;
  }

  ${CheckboxBase}:hover + & {
    border-color: ${({ theme }) => theme.colors.grayColors.light};
    background-color: ${({ theme }) => theme.colors.grayColors.light};
  }
`;

const CheckboxWrapper = styled.div<StyledCheckboxProps>`
  width: ${({ $size }) => `${$size}rem`};
  height: ${({ $size }) => `${$size}rem`};
  border-radius: 0.5rem;
  position: relative;
`;

const Label = styled.label`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grayColors.dark};
  cursor: pointer;
`;

const Styled = { CheckboxBase, Checkbox, CheckboxWrapper, Wrapper, Label };

export default Styled;
