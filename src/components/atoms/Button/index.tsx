import { Props } from './types';
import Styled from './styles';

const Button = ({ label, isPrimary = false, isDanger = false }: Props) => (
  <Styled.Button isPrimary={isPrimary} isDanger={isDanger} type="button">
    {label}
  </Styled.Button>
);

export default Button;
