import FormLoginIn from "../FormLogIn/FormLogIn";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const ModalLoginIn = ({ onCloseModal, isOpen }) => {
  return (
    <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
      <FormLoginIn />
    </ModalWrapper>
  );
};

export default ModalLoginIn;
