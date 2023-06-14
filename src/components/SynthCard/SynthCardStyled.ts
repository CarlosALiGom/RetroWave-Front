import styled from "styled-components";

const SynthCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgb(155, 19, 78);
  background: linear-gradient(
    90deg,
    rgba(155, 19, 78, 1) 0%,
    rgba(28, 19, 38, 1) 100%
  );
  border-radius: 10px;
  width: 260px;
  margin: 0 auto;

  .card-list {
    &__image {
      object-fit: initial;
      height: 210px;
      width: 260px;
      background-size: contain;
      border-radius: 10px 10px 0 0;
    }

    &__title {
      font-size: 20px;
      padding: 14px;
      width: 220px;
      overflow-wrap: break-word;
    }

    &__button {
      background: transparent;
      position: absolute;
      width: 48px;
      height: 48px;
      bottom: 5px;
      right: 10px;
    }
  }
`;

export default SynthCardStyled;
