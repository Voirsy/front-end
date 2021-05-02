import { Link } from 'react-router-dom';
import { useAuthContextState } from '../../../context/authContext';
import Button from '../../atoms/Button';
import IconButton from '../../atoms/IconButton';
import Styled from './styles';
import { UserInfoProps } from './types';

const UserInfo = ({ modalToggle, isModalOpen }: UserInfoProps) => {
  const { isAuthenticated, userInfo } = useAuthContextState();

  return (
    <Styled.UserInfoContentWrapper>
      {isAuthenticated() ? (
        <>
          <Styled.UserInfo>{userInfo.name}</Styled.UserInfo>
          <Styled.AvatarWrapper>
            <IconButton
              isAvatar
              aria-label="Open main navigation"
              avatarUrl={userInfo.avatarUrl ?? undefined}
              onClick={() => modalToggle(!isModalOpen)}
            />
          </Styled.AvatarWrapper>
        </>
      ) : (
        <Styled.ButtonWrapper>
          <Button variant="contained" borderRadius={20} as={Link} to="/signin" className="custom">
            Sign in
          </Button>
        </Styled.ButtonWrapper>
      )}
    </Styled.UserInfoContentWrapper>
  );
};

export default UserInfo;
