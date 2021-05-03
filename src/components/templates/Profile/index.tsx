import { useLocation } from 'react-router-dom';
import NavigationData from '../../../data/NavigationData';
import ProfileNavigation from '../../molecules/ProfileNavigation';
import Styled from './styles';
import { ProfileTemplateProps } from './types';

const ProfileTemplate = ({ children }: ProfileTemplateProps) => {
  const { pathname } = useLocation();

  return (
    <Styled.Wrapper>
      <Styled.NavigationContainer>
        <ProfileNavigation navigationData={NavigationData} pathname={pathname} />
      </Styled.NavigationContainer>
      <Styled.ViewWrapper>
        <Styled.ViewTitle>
          {NavigationData.find((el) => el.to === pathname)?.viewTitle || 'Account'}
        </Styled.ViewTitle>
        <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
      </Styled.ViewWrapper>
    </Styled.Wrapper>
  );
};

export default ProfileTemplate;
