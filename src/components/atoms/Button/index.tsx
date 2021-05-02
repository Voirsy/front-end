import { FcGoogle } from 'react-icons/fc';
import { ButtonProps } from './types';
import Styled from './styles';
// import theme from '../../../theme/theme';
import Spinner from '../Spinner';

const Button = ({
  children,
  isSocial = false,
  isLoading = false,
  color = 'primary',
  iconColor = 'black',
  variant = 'default',
  width,
  height,
  borderRadius,
  ...props
}: ButtonProps) => (
  <Styled.Button
    isLoading={isLoading}
    isSocial={isSocial}
    color={isSocial ? 'social' : color}
    variant={isSocial ? 'contained' : variant}
    $width={width}
    $height={isSocial && !height ? 4 : height}
    disabled={isLoading}
    $borderRadius={borderRadius}
    {...props}
  >
    {isLoading && <Spinner size={height ? `calc(${height}rem * 0.75)` : '80%'} color={iconColor} />}
    {isSocial && <FcGoogle />}
    {!isLoading && children}
  </Styled.Button>
);

export default Button;
