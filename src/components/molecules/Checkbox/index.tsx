import Styled from './styles';
import { CheckboxProps } from './types';

const Checkbox = ({ name, children, size = 2 }: CheckboxProps) => (
  <Styled.Wrapper $size={size}>
    <Styled.CheckboxWrapper $size={size}>
      <Styled.CheckboxBase type="checkbox" name={name} id={name} />
      <Styled.Checkbox />
    </Styled.CheckboxWrapper>
    <Styled.Label htmlFor={name}>{children}</Styled.Label>
  </Styled.Wrapper>
);

export default Checkbox;
