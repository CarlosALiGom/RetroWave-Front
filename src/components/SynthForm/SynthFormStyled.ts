import styled from "styled-components";

const SynthFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(prop) => prop.theme.color.darkLight};
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
  gap: 20px;

  .form {
    &__title {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 400;
    }

    &__controls {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__input {
      padding: 15px;
      min-height: 48px;
      min-width: 230px;
      border-radius: 10px;
      font-size: 16px;

      &--description {
        font-size: inherit;
        min-height: 200px;
        min-width: 230px;
        font-family: inherit;
        padding: 15px;
        outline-style: none;
      }
    }

    &__button {
      background-color: ${(prop) => prop.theme.color.primary};
      color: ${(prop) => prop.theme.color.light};
      border-radius: 10px;
      border: 2px solid ${(prop) => prop.theme.color.dark};
      margin: 0 auto;
      height: 48px;
      width: 115px;
      font-size: 20px;
      font-weight: 700;
      :disabled {
        background-color: ${(prop) => prop.theme.color.darkLight};
        border: 2px solid ${(prop) => prop.theme.color.primary};
        cursor: auto;
      }
    }
  }
`;

export default SynthFormStyled;
