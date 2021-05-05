import { useLocation } from 'react-router-dom';
import Header from '../../atoms/Header';
import Styled from './styles';
import MainTitle from '../../atoms/MainTitle';
import ModalTemplate from '../../templates/Modal';
import ProfileNavigation from '../ProfileNavigation';
import NavigationData from '../../../data/NavigationData';

const ProfileMenu = ({ modalToggle }: { modalToggle: (val: boolean) => void }) => {
  const { pathname } = useLocation();

  return (
    <ModalTemplate isAdjustedToParent modalToggle={modalToggle}>
      <Header>
        <MainTitle>Voirsy</MainTitle>
        <button type="button" onClick={() => modalToggle(false)}>
          Close
        </button>
      </Header>
      <Styled.ModalContent>
        <ProfileNavigation navigationData={NavigationData} pathname={pathname} />
      </Styled.ModalContent>
    </ModalTemplate>
  );
};

export default ProfileMenu;
