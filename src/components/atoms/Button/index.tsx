import { Props } from './types';
import { Styled } from './styles';

export const Button = ({ label, isPrimary = false, isDanger = false }: Props) => {
  return (
    <Styled.Button isPrimary={isPrimary} isDanger={isDanger} type="button">
      {label}
    </Styled.Button>
  );
};
