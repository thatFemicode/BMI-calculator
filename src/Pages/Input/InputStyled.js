import styled from "styled-components";

export const InputStyled = styled.main`
  padding-top: 4rem;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #fff 60%, #b7e2ef 40%);
  /* display: flex; */
  @media (max-width: ${({ theme }) => theme.images}) {
    background: unset;
  }

  .input {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 0 4rem;
    &-left {
      flex: 70%;
      align-self: right;
      img {
        max-width: 290px;
      }
    }
    &-right {
      padding-top: 5rem;
      flex: 30%;
    }
  }
`;
