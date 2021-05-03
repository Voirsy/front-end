import styled from 'styled-components';

const Notification = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    font-size: 2.1rem;
  }
`;

const Styled = { Notification };

export default Styled;
