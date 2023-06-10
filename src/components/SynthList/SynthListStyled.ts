import styled from "styled-components";

const SynthListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 30px;

  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 590px;
  }
`;

export default SynthListStyled;
