import styled from "styled-components";

export const DashboardStyled = styled.main`
  padding-top: 4rem;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #f6f8fb 50%, #fff 50%);
  @media (max-width: ${({ theme }) => theme.images}) {
    background: linear-gradient(180deg, #f6f8fb 60%, #fff 40%);
  }
  @media screen and (min-height: 100px) and (max-height: 896px) and (max-width: 415px) {
    background: linear-gradient(180deg, #f6f8fb 50%, #fff 50%);
  }
  @media screen and (min-height: 100px) and (max-height: 736px) and (max-width: 415px) {
    background: linear-gradient(180deg, #f6f8fb 60%, #fff 40%);
  }
  @media screen and (min-height: 100px) and (max-height: 667px) and (max-width: 375px) {
    background: linear-gradient(180deg, #f6f8fb 60%, #fff 40%);
  }
  .dashboard {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    @media (max-width: ${({ theme }) => theme.images}) {
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;
    }
    &-left {
      align-self: flex-start;
      flex: 3;
      height: 100%;
      width: 100%;
      .auth {
        /* height: 100%; */
        &-form-container-fields {
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          position: relative;
          /* height: 80vh; */

          @media screen and (max-width: 800px) {
            justify-content: flex-start;
          }
          @media screen and (max-width: 415px) {
            padding: 2rem 0.5rem;
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            flex: 4;
          }

          &-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 2rem;

            border-radius: 5px;
            transition: 0.8s ease;

            @media screen and (max-width: 375px) {
              padding: 1rem;
            }
            p {
              font-size: 1.5rem;
              font-weight: 900;
            }
            .text {
              font-size: 1rem;
            }
            &-input {
              display: flex;
              flex-direction: column;
              position: relative;
              margin: 1rem 0rem;
              i {
                position: absolute;
                top: 50%;
                right: 40%;
                @media screen and (max-width: 548px) {
                  right: 10%;
                }
              }
              i:hover {
                color: #00fcb6;
                cursor: pointer;
              }
              label {
                margin-bottom: 0.45rem;
                color: rgb(61, 79, 88);
                font-size: 12px;

                letter-spacing: 0.7px;
                line-height: 1.3;
              }
              input {
                padding: 0.55rem 0.4rem;
                border: 1px solid #000;
                border-radius: 4px;
                font-size: 14px;
                outline: none;
                transition: all 150ms ease-in-out 0s;
                width: 65%;
                background: #fff;
                @media screen and (max-width: 548px) {
                  width: 95%;
                }
                &::placeholder {
                  color: #b1b1b1;
                  width: 100%;
                  font-weight: unset;
                }
                &:active,
                &:focus {
                  border-color: #000;
                }
              }
            }
            &-button {
              margin-top: 2rem;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              button {
                border-radius: 4px;
                background-color: #b7e2ef;
                border: none;
                color: 000;
                font-weight: 500;
                padding: 0.7rem 1.2rem;
                outline: none;
                cursor: pointer;
                transition: 0.3s ease;

                &:hover {
                  background: #fff;
                  color: #1d428a;
                  border: 1px solid #fff;
                }
              }
            }
          }
        }
      }
    }
    &-right {
      /* width: 100%; */
      height: 100%;
      flex: 3;
      display: flex;
      align-items: center;
      /* padding-left: 2.3rem;
      padding-right: 2.3rem; */
      padding: 2.3rem;
      padding-top: 1rem; /* justify-content: center; */ /* @media (max-width: ${({
        theme,
      }) => theme.make}) {
        flex: unset;
        align-self: center;
      } */
      .right {
        img {
          width: 270px;
          @media (max-width: ${({ theme }) => theme.images}) {
            width: 120px;
          }
          @media (max-width: ${({ theme }) => theme.max}) {
            width: 150px;
          }
          @media screen and (min-height: 100px) and (max-height: 896px) and (max-width: 415px) {
            width: 190px;
          }
          @media screen and (min-height: 100px) and (max-height: 736px) and (max-width: 415px) {
            width: 150px;
          }
          @media screen and (min-height: 100px) and (max-height: 667px) and (max-width: 375px) {
            width: 140px;
          }
        }
      }
      .left {
        /* align-self: flex-end;
        margin-bottom: 2rem; */

        /* text-align: justify; */
        h3 {
          font-size: 1.7rem;
          @media (max-width: ${({ theme }) => theme.dont}) {
            font-size: 1.4rem;
          }
          @media (max-width: ${({ theme }) => theme.make}) {
            font-size: 1rem;
          }
        }
        p {
          text-transform: capitalize;
          font-size: 1rem;
          line-height: 1.6;
          @media (max-width: ${({ theme }) => theme.make}) {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;
