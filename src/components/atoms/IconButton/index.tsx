import { Props } from './types';
import Styled from './styles';

const IconButton = ({ isPrimary = true, size = 5, isBorder = true, type = 'button' }: Props) => (
  <Styled.Button isPrimary={isPrimary} size={size} isBorder={isBorder} type={type}>
    12
  </Styled.Button>
);
export default IconButton;
