import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: ${(prop) => prop.theme.color.darkLight};
  opacity: 0.9;
  width: 100vw;
  height: 100vh;

  .custom-loader {
    width: 160px;
    height: 80px;
    color: #62fe78;
    --c: linear-gradient(currentColor 0 0);
    background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c),
      var(--c);
    background-repeat: no-repeat;
    animation: l4-1 1.5s infinite, l4-2 1.5s infinite;
  }

  @keyframes l4-1 {
    0% {
      background-size: 0 8px, 8px 0, 0 8px, 8px 0, 0 8px, 8px 0, 0 8px;
    }
    7.14% {
      background-size: 25% 8px, 8px 0, 0 8px, 8px 0, 0 8px, 8px 0, 0 8px;
    }
    14.29% {
      background-size: 25% 8px, 8px 50%, 0 8px, 8px 0, 0 8px, 8px 0, 0 8px;
    }
    21.43% {
      background-size: 25% 8px, 8px 50%, 25% 8px, 8px 0, 0 8px, 8px 0, 0 8px;
    }
    28.57% {
      background-size: 25% 8px, 8px 50%, 25% 8px, 8px 100%, 0 8px, 8px 0, 0 8px;
    }
    35.71% {
      background-size: 25% 8px, 8px 50%, 25% 8px, 8px 100%, 25% 8px, 8px 0,
        0 8px;
    }
    42.86% {
      background-size: 25% 8px, 8px 50%, 25% 8px, 8px 100%, 25% 8px, 8px 50%,
        0 8px;
    }
    49%,
    51% {
      background-size: 25% 8px, 8px 50%, 25% 8px, 8px 100%, 25% 8px, 8px 50%,
        25% 8px;
    }
    57.14% {
      background-size: 0 8px, 8px 50%, 25% 8px, 8px 100%, 25% 8px, 8px 50%,
        25% 8px;
    }
    64.29% {
      background-size: 0 8px, 8px 0, 25% 8px, 8px 100%, 25% 8px, 8px 50%,
        25% 8px;
    }
    71.43% {
      background-size: 0 8px, 8px 0, 0 8px, 8px 100%, 25% 8px, 8px 50%, 25% 8px;
    }
    78.57% {
      background-size: 0 8px, 8px 0, 0 8px, 8px 0, 25% 8px, 8px 50%, 25% 8px;
    }
    85.71% {
      background-size: 0 8px, 8px 0, 0 8px, 8px 0, 0 8px, 8px 50%, 25% 8px;
    }
    92.86% {
      background-size: 0 8px, 8px 0, 0 8px, 8px 0, 0 8px, 8px 0, 25% 8px;
    }
    100% {
      background-size: 0 8px, 8px 0, 0 8px, 8px 0, 0 8px, 8px 0, 0 8px;
    }
  }
  @keyframes l4-2 {
    0%,
    49.9% {
      background-position: 0 50%, bottom 40px left 32px, 40px 0, 50% 0,
        80px 100%, bottom 0 right 32px, 120px 50%;
    }
    50%,
    100% {
      background-position: right 120px top 50%, 32px 0, right 80px top 0,
        50% 100%, right 40px bottom 0, right 32px top 40px, 100% 50%;
    }
  }
`;

export default LoaderStyled;
