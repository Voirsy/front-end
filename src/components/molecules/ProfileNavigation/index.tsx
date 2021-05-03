import { Link } from 'react-router-dom';
import Styled from './styles';
import { ProfileNavigationProps } from './types';

const ProfileNavigation = ({ pathname, navigationData }: ProfileNavigationProps) => (
  <>
    <Styled.Navigation>
      <ul>
        {navigationData.map(({ icon, label, to }) => (
          <Link to={to} key={to}>
            <Styled.ListItem isActive={pathname === to}>
              <Styled.IconWrapper>{icon}</Styled.IconWrapper>
              <p>{label}</p>
            </Styled.ListItem>
          </Link>
        ))}
      </ul>
    </Styled.Navigation>
  </>
);

export default ProfileNavigation;
