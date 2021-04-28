import ProfileNavigation from '../../molecules/ProfileNavigation';
import Styled from './styles';
import { ProfileTemplateProps } from './types';

const ProfileTemplate = ({ children }: ProfileTemplateProps) => (
  <Styled.Wrapper>
    <Styled.NavigationContainer>
      <ProfileNavigation />
    </Styled.NavigationContainer>
    {children}
  </Styled.Wrapper>
);

export default ProfileTemplate;
