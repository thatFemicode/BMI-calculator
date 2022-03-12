import styled from "styled-components";

export const InputStyled = styled.main`
  padding-top: 4rem;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #fff 60%, #f6f8fb 40%);
  @media (max-width: ${({ theme }) => theme.post}) {
    background: linear-gradient(90deg, #fff 50%, #f6f8fb 50%);
  }

  @media (max-width: ${({ theme }) => theme.make}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.mobil}) {
    align-items: unset;
    background: linear-gradient(180deg, #fff 80%, #f6f8fb 20%);
  }
  .input {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 4rem;
    @media (max-width: ${({ theme }) => theme.images}) {
      padding: 0 2rem;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      flex-direction: column-reverse;
    }
    &-left {
      width: 100%;
      height: 100%;
      position: relative;
      flex: 70%;
      display: flex;
      @media (max-width: ${({ theme }) => theme.images}) {
        flex: unset;
        width: 50%;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        /* width: 300px; */
      }
      @media (max-width: ${({ theme }) => theme.max}) {
        flex: unset;
        width: 100%;
      }
      @media (max-width: ${({ theme }) => theme.mobil}) {
        justify-content: flex-end;
      }
      /* @media (max-width: ${({ theme }) => theme.foot}) {
        margin-left: 4rem;
        margin-top: 4rem;
      } */

      img {
        width: 290px;
        height: 100%;
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          width: 350px;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 290px;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          width: 230px;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          width: 210px;
        }
        @media (max-width: ${({ theme }) => theme.mobil}) {
          width: 130px;
          margin-top: 3rem;
        }
        @media (max-width: ${({ theme }) => theme.foot}) {
          width: 110px;
        }
      }
      &-card {
        position: relative;
        align-self: center;
        margin-top: 8rem;
        @media (max-width: ${({ theme }) => theme.post}) {
          transform: rotate(90deg);
          left: -80px;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          transform: rotate(90deg);
          left: -80px;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          left: -70px;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          left: -50px;
        }
      }
    }
    &-right {
      width: 100%;
      position: relative;
      padding-top: 5rem;
      flex: 30%;
      @media (max-width: ${({ theme }) => theme.images}) {
        flex: unset;
        width: 50%;
        padding-left: 2rem;
      }
      @media (max-width: ${({ theme }) => theme.max}) {
        flex: unset;
        width: 100%;
        padding-left: 0;
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
        z-index: 4;
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          top: 35%;
        }
        @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
          top: 40%;
        }
        /* @media (max-width: ${({ theme }) => theme.images}) {
          top: 50%;
      
        } */
        @media (max-width: ${({ theme }) => theme.images}) {
          top: 60%;
          left: 30px;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          left: 0px;
        }
        @media (max-width: ${({ theme }) => theme.mobil}) {
          top: 125%;
        }
      }
    }
  }
`;
