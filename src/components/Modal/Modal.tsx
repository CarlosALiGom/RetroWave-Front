import { useAppDispatch } from "../../store";
import { ModalPayload, hideErrorActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

const Modal = ({ isError, message }: ModalPayload): React.ReactElement => {
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(hideErrorActionCreator());
  };

  return (
    <ModalStyled className="modal">
      <div
        className={
          isError
            ? "modal__container modal__container--errorFeedback"
            : "modal__container modal__container--positiveFeedback"
        }
      >
        <Button
          className="modal__button"
          iconPath={
            isError
              ? "/img/closeButtonError.svg"
              : "/img/closeButtonFeedback.svg"
          }
          altText="Close button"
          width={48}
          height={48}
          actionOnClick={closeModal}
        />
        <img
          src={
            isError ? "/img/synthModalError.svg" : "/img/synthModalFeedback.svg"
          }
          alt="synth modal ilustration"
          className="modal__image"
          width={183}
          height={100}
        />
        <p className="modal__text">{message}</p>
      </div>
    </ModalStyled>
  );
};

export default Modal;
