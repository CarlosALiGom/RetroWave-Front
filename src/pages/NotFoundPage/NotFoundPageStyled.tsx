import styled from "styled-components";

const NotFoundPageStyled = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: rgb(28, 19, 38);
  background: linear-gradient(
    0deg,
    rgba(28, 19, 38, 0.7) 0%,
    rgba(155, 19, 78, 0.7) 100%
  );

  border-radius: 10px;
  min-width: 260px;
  min-height: 300px;

  .not-found {
    &__title {
      color: ${(prop) => prop.theme.color.light};
      font-size: 45px;
      font-weight: 700;
      max-width: 400px;
      padding: 15px;
      text-align: center;
    }
  }
`;

export default NotFoundPageStyled;
