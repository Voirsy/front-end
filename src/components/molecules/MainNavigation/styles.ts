// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 0.5rem;
  width: 20rem;
  padding: 20px 0;
`;

const MenuPosition = styled.li`
  height: 3.5rem;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% auto;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayColors.dark};
  transition: background-color 100ms ease-in-out;
  background: transparent;
  border: 0;

  > span {
    font-size: 1.7rem;
    justify-self: left;
  }

  > svg {
    width: 2.5rem;
    height: 2.5rem;
    justify-self: center;
    stroke-width: 2.5px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.purple._005};
  }

  &.selected {
    color: ${({ theme }) => theme.colors.purple._090};
  }
`;

const Link = styled(Button)``;

const Styled = { Wrapper, MenuPosition, Button, Link };

export default Styled;
