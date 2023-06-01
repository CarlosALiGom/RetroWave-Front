import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  .header {
    &__logo {
      margin: 5px;
    }
  }
`;

export default HeaderStyled;
