import styled from "styled-components";

export const HomeStyled = styled.main`
  padding-top: 5rem;
  height: 100%;
  width: 100%;
  position: relative;
  /* background: linear-gradient(90deg, #fff 80%, #b7e2ef 20%); */
  /* display: flex; */
  @media (max-width: ${({ theme }) => theme.make}) {
    padding-top: 2rem;
    /* height: 100vh;
    overflow: hidden; */
  }
  .circle {
    position: absolute;
    bottom: -60px;
    right: 0px;
    width: 100%;
    height: 500px;
    z-index: -1;
    background-color: #b7e2ef;
    clip-path: circle(900px at right 1150px);
    @media (max-width: ${({ theme }) => theme.mind}) {
      clip-path: circle(900px at right 1200px);
    }
    @media (max-width: ${({ theme }) => theme.dont}) {
      clip-path: circle(900px at right 1200px);
      bottom: -150px;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      clip-path: circle(900px at right 1000px);

      bottom: -610px;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      bottom: -200px;
    }
    @media (max-width: ${({ theme }) => theme.images}) {
      bottom: -250px;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      bottom: -100px;
      clip-path: circle(750px at left 1150px);
    }
    /* @media screen and (min-height: 400px) and (max-height: 600px) {
      clip-path: circle(600px at left 1000px);
    } */
  }
  .home {
    display: flex;
    padding: 0 5rem;
    @media (max-width: ${({ theme }) => theme.make}) {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    &-left {
      /* position: relative; */
      flex: 30%;
      .human {
        position: relative;
        max-width: 260px;
        @media (max-width: ${({ theme }) => theme.dont}) {
          width: 220px;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 200px;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          width: 180px;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          width: 130px;
        }
      }
      .bell {
        position: absolute;
        max-width: 120px;
        transform: rotate(40deg);
        bottom: 0;
        @media (max-width: ${({ theme }) => theme.dont}) {
          max-width: 70px;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          width: 50px;
        }
        /* mix-blend-mode: darken; */
      }
    }
    &-right {
      flex: 70%;
      padding-top: 4rem;
      padding-left: 4rem;
      @media (max-width: ${({ theme }) => theme.make}) {
        padding: 4rem 2rem 0 2rem;
      }
      .heading {
        color: #b7e2ef;
        /* color: #ff6700; */
        font-size: 4.5rem;
        @media (max-width: ${({ theme }) => theme.dont}) {
          font-size: 3rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 2.8rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 2rem;
          /* height: 100vh;
    overflow: hidden; */
        }
        .calc {
          color: #000;
        }
      }
      .main-text {
        max-width: 450px;
        line-height: 1.8;
        font-size: 1rem;
        font-weight: 600;
        text-align: justify;
        color: #060613;
        opacity: 0.7;
        @media (max-width: ${({ theme }) => theme.dont}) {
          font-size: 0.85rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 0.775rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          max-width: 400px;
        }
      }
      &-card {
        display: flex;
        max-width: 300px;
        justify-content: space-between;
        margin-top: 3rem;
        @media (max-width: ${({ theme }) => theme.desktop}) {
          margin-top: 2rem;
          max-width: 260px;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          max-width: 210px;
        }
        p {
          max-width: unset;
        }
      }
    }
  }
`;
