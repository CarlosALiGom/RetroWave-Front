import styled from "styled-components";

const SynthListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;

  .synth-list {
    &__card {
      background-color: ${(prop) => prop.theme.color.darkLight};
    }
  }
`;

export default SynthListStyled;
