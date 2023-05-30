import styled from "styled-components";

const NavigationBarStyled = styled.nav`
  background-color: ${(prop) => prop.theme.color.darkLight};
  color: ${(prop) => prop.theme.color.light};
  border-radius: 10px;

  .navBar__list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    min-width: 260px;
    height: 55px;
  }
`;

export default NavigationBarStyled;
