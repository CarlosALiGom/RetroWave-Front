import styled from "styled-components";

const DetailsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .details-page {
    &__controls {
      display: flex;
      flex-direction: row;
      gap: 30px;
    }

    &__buttons {
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

    &__article {
      display: flex;
      flex-direction: column;
      position: relative;
      background: rgb(155, 19, 78);
      background: linear-gradient(
        180deg,
        rgba(155, 19, 78, 1) 0%,
        rgba(28, 19, 38, 1) 100%
      );
      border-radius: 10px;
      width: 260px;
      margin: 0 auto;
      padding-bottom: 15px;
      word-wrap: break-word;
    }

    &__image {
      object-fit: initial;
      height: 210px;
      width: 260px;
      background-size: contain;
      border-radius: 10px 10px 0 0;
    }

    &__title {
      text-align: center;
      font-size: 24px;
      padding: 15px 15px 0px 15px;
    }

    &__properties {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      padding: 15px;
      gap: 10px;

      &--title {
        font-weight: 600;
      }

      &--text {
        font-weight: 300;
      }
    }
  }
`;

export default DetailsPageStyled;
