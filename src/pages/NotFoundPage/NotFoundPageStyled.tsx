import styled from "styled-components";

const NotFoundPageStyled = styled.article`
  display: flex;
  align-items: center;
  background: rgb(28, 19, 38);
  background: linear-gradient(
    0deg,
    rgba(28, 19, 38, 0.7) 0%,
    rgba(155, 19, 78, 0.7) 100%
  );

  border-radius: 10px;
  width: 260px;
  height: 300px;

  .not-found {
    &__title {
      color: ${(prop) => prop.theme.color.light};
      font-size: 45px;
      font-weight: 700;
      padding: 15px;
      text-align: center;
    }
  }
`;

export default NotFoundPageStyled;
