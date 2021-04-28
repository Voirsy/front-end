import Header from '../../atoms/Header';
import Styled from './styles';
import MainTitle from '../../atoms/MainTitle';
import ModalTemplate from '../../templates/Modal';
import ProfileNavigation from '../ProfileNavigation';

const ProfileMenu = ({ modalToggle }: { modalToggle: (val: boolean) => void }) => (
  <ModalTemplate width="100%" height="100%">
    <Header>
      <MainTitle>Voirsy</MainTitle>
      <button type="button" onClick={() => modalToggle(false)}>
        Close
      </button>
    </Header>
    <Styled.ModalContent>
      <ProfileNavigation />
    </Styled.ModalContent>
  </ModalTemplate>
);

export default ProfileMenu;
