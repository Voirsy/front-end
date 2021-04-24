import styled from 'styled-components';
import { TextareaProps } from './types';

const Textarea = styled.textarea<TextareaProps>`
  resize: none;
  outline: none;
  width: ${({ inputWidth }) => `${inputWidth}rem`};
  height: ${({ inputHeight }) => `${inputHeight}rem`};
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.blueOutline.normal};

  :hover:not(:disabled),
  :focus {
    background-color: ${({ theme }) => theme.colors.blueOutline._030};
  }
`;

const Styled = {
  Textarea,
};

export default Styled;
