import React from 'react';
import Styled from './styles';

const MainTitle = ({ children }: { children: React.ReactNode | string }) => (
  <Styled.Title>{children}</Styled.Title>
);

export default MainTitle;
