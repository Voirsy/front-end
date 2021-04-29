import Styled from './styles';
import { TextareaProps } from './types';

const Textarea = ({ inputHeight, inputWidth, ...rest }: TextareaProps) => (
  <Styled.Textarea inputHeight={inputHeight} inputWidth={inputWidth} {...rest} />
);

export default Textarea;
