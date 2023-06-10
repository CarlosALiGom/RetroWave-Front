import styled from "styled-components";

const SynthsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  .header {
    &__title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      background: rgb(155, 19, 78);
      background: linear-gradient(
        90deg,
        rgba(155, 19, 78, 1) 0%,
        rgba(28, 19, 38, 1) 100%
      );
      min-height: 48px;
      min-width: 260px;
      background-color: ${(prop) => prop.theme.color.darkLight};
      color: ${(prop) => prop.theme.color.light};
      border-radius: 10px;
      font-size: 20px;

      @media (min-width: 650px) {
        width: 590px;
      }
    }
  }
`;

export default SynthsPageStyled;
