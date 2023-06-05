import styled from "styled-components";

const ModalStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: ${(prop) => prop.theme.color.darkLight}b5;
  width: 100vw;
  height: 100vh;

  .modal {
    &__container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 270px;
      height: 320px;
      padding: 10px;
      background-color: ${(prop) => prop.theme.color.darkLight};
      border-radius: 10px;

      &--errorFeedback {
        border: 10px solid ${(prop) => prop.theme.color.primary};
        color: ${(prop) => prop.theme.color.primary};
      }

      &--positiveFeedback {
        border: 10px solid ${(prop) => prop.theme.color.secundary};
        color: ${(prop) => prop.theme.color.secundary};
      }
    }

    &__button {
      position: absolute;
      background-color: transparent;
      right: 10px;
    }

    &__image {
      margin-top: 75px;
    }

    &__text {
      color: inherit;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 15px;
    }
  }
`;

export default ModalStyled;
