import FormBookTrialLesson from "../FormBookTrialLesson/FormBookTrialLesson";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const ModalLoginIn = ({ onCloseModal, isOpen }) => {
  return (
    <ModalWrapper
      modalIsOpen={isOpen}
      onCloseModal={onCloseModal}
      top="1%"
      transform="translate(-50%, 0)"
    >
      <FormBookTrialLesson />
    </ModalWrapper>
  );
};

export default ModalLoginIn;
