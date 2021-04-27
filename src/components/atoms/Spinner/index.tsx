import Styled from './styles';
import { ReactComponent as SpinnerIcon } from '../../../assets/spinner.svg';
import { SpinnerProps } from './types';

const Spinner = ({ size, color }: SpinnerProps) => (
  <Styled.Wrapper size={size} color={color}>
    <SpinnerIcon />
  </Styled.Wrapper>
);
export default Spinner;
