import styled from 'styled-components';

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 2.2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    font-size: 2.8rem;
  }
`;

const Styled = { Title };

export default Styled;
