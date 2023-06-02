import styled from "styled-components";

const SynthsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .header {
    &__title {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      min-width: 260px;
      background-color: ${(prop) => prop.theme.color.darkLight};
      color: ${(prop) => prop.theme.color.light};
      border-radius: 10px;
      font-size: 20px;
    }
  }
`;

export default SynthsPageStyled;
