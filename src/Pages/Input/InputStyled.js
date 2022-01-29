import styled from "styled-components";

export const InputStyled = styled.main`
  padding-top: 4rem;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #fff 60%, #b7e2ef 40%);
  /* display: flex; */
  @media (max-width: ${({ theme }) => theme.post}) {
    background: linear-gradient(90deg, #fff 50%, #b7e2ef 50%);
  }
  @media (max-width: ${({ theme }) => theme.images}) {
    background: unset;
  }
  .input {
    position: relative;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 0 4rem;
    &-left {
      position: relative;
      flex: 70%;
      /* align-self: right; */
      display: flex;
      img {
        max-width: 290px;
      }
      &-card {
        position: relative;
        align-self: center;
        margin-top: 8rem;
        @media (max-width: ${({ theme }) => theme.post}) {
          transform: rotate(90deg);
          left: -80px;
        }
      }
    }
    &-right {
      /* align-self: start; */
      position: relative;
      padding-top: 5rem;
      flex: 30%;
      /* padding-left: 5rem; */
      h1 {
      }
      button {
        cursor: pointer;
        /* background: rgb(225, 225, 225); */
        position: absolute;
        top: 40%;
        left: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        /* transform: scale3d(1, 1, 1); */
        /* transition: background 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s,
          transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s; */
        z-index: 21;
      }
    }
  }
`;
