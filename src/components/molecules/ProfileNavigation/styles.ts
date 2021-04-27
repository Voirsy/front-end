import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
`;

const ListItem = styled.li<{ isActive: boolean }>`
  width: 25rem;
  height: 4rem;
  display: grid;
  align-items: center;
  grid-template-columns: 4rem 1fr;
  border-radius: 1rem;
  font-size: 2.2rem;
  transition: background-color 150ms ease-in-out;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.grayColors.dark)};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.purple.normal : 'transparent'};
  margin: 0.5rem 0;

  :hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.purple._090 : theme.colors.grayColors.dark020};
  }
`;

const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;

const Styled = { Wrapper, ListItem, IconWrapper };

export default Styled;
