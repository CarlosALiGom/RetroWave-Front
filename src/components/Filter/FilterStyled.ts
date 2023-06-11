import styled from "styled-components";

const FilterStyled = styled.select`
  background-color: ${(prop) => prop.theme.color.darkLight};
  max-width: 600px;
  margin: 0 auto;
  min-height: 48px;
  min-width: 260px;
  border-radius: 10px;
  font-family: inherit;
  padding-left: 15px;
  color: ${(prop) => prop.theme.color.light};
  font-size: 16px;
`;

export default FilterStyled;
