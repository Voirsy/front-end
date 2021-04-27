import ProfileNavigation from '../../molecules/ProfileNavigation';
import Styled from './styles';
import { ProfileTemplateProps } from './types';

const ProfileTemplate = ({ children }: ProfileTemplateProps) => (
  <Styled.Wrapper>
    <Styled.Navigation>
      <ul>
        <ProfileNavigation />
      </ul>
    </Styled.Navigation>
    {children}
  </Styled.Wrapper>
);

export default ProfileTemplate;
