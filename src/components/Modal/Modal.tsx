import { ModalPayload } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

const Modal = ({ isError, message }: ModalPayload): React.ReactElement => {
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
            isError ? "img/closeButtonError.svg" : "img/closeButtonFeedback.svg"
          }
          width={48}
          height={48}
        />
        <img
          src={
            isError ? "img/synthModalError.svg" : "img/synthModalFeedback.svg"
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
