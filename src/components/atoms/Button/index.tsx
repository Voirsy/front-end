import BeatLoader from 'react-spinners/BeatLoader';
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
  isLoading = false,
  onClick = () => {},
}: Props) => (
  <Styled.Button
    type={type}
    size={size}
    borderRadius={borderRadius}
    isPrimary={isPrimary}
    isWarning={isWarning}
    border={border}
    isPrimaryColor={isPrimaryColor}
    isBold={isBold}
    buttonWidth={buttonWidth}
    isLoading={isLoading}
    onClick={onClick}
  >
    {isLoading ? (
      <BeatLoader
        color={theme.colors.grayColors.dark}
        size={size === 'small' || size === 'verysmall' ? 12 : 16}
      />
    ) : (
      label
    )}
  </Styled.Button>
);

export default Button;
