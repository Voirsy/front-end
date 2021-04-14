import { BeatLoader } from 'react-spinners';
import { FcGoogle } from 'react-icons/fc';
import { Props } from './types';
import Styled from './styles';
import theme from '../../../theme/theme';

const Button = ({
  label,
  type = 'button',
  size = 'small',
  borderRadius = 1,
  isPrimary = true,
  isWarning = false,
  border = true,
  isPrimaryColor = false,
  isBold = false,
  buttonWidth = 0,
  isSocial = false,
  isLoading = false,
  ariaLabel,
  fontSize,
  onClick = () => {},
}: Props) => (
  <Styled.Button
    type={type}
    size={isSocial ? 'medium' : size}
    borderRadius={isSocial ? 30 : borderRadius}
    isPrimary={isPrimary}
    isWarning={isWarning}
    border={border}
    isPrimaryColor={isPrimaryColor}
    isBold={isBold}
    buttonWidth={buttonWidth}
    isLoading={isLoading}
    onClick={onClick}
    isSocial={isSocial}
    fontSize={fontSize}
    aria-label={ariaLabel}
  >
    {isLoading && (
      <BeatLoader
        color={theme.colors.grayColors.dark}
        size={size === 'small' || size === 'verysmall' ? 12 : 16}
      />
    )}
    {isSocial && <FcGoogle />}
    {!isLoading && label}
  </Styled.Button>
);

export default Button;
