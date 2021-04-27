import { useAuthContextState } from '../../../context/authContext';
import Styled from './styles';
import { HeaderTemplateTypes } from './types';

const HeaderTemplate = ({ children }: HeaderTemplateTypes) => {
  const { isAuthenticated, userInfo } = useAuthContextState();

  return (
    <>
      <Styled.Header>
        <Styled.HeaderContainer>
          <Styled.Title>Voirsy</Styled.Title>
          <Styled.ActionWrapper>
            {isAuthenticated() ? <p>{userInfo.name}</p> : <p>D U P A</p>}
          </Styled.ActionWrapper>
        </Styled.HeaderContainer>
      </Styled.Header>
      {children}
    </>
  );
};

export default HeaderTemplate;
