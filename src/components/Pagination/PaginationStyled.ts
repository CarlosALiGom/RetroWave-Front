import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 30px;

  @media (min-width: 650px) {
    gap: 320px;
  }

  @media (min-width: 900px) {
    gap: 610px;
  }

  .pagination {
    &__button {
      background-color: ${(prop) => prop.theme.color.primary};
      color: ${(prop) => prop.theme.color.light};
      border-radius: 10px;
      border: 2px solid ${(prop) => prop.theme.color.dark};
      margin: 0 auto;
      height: 48px;
      width: 115px;
      font-size: 20px;
      font-weight: 700;
      :disabled {
        background-color: ${(prop) => prop.theme.color.darkLight};
        border: 2px solid ${(prop) => prop.theme.color.primary};
        cursor: auto;
      }
    }
  }
`;

export default PaginationStyled;
