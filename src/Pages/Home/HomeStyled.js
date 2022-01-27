import styled from "styled-components";

export const HomeStyled = styled.main`
  padding-top: 5rem;
  height: 100%;
  width: 100%;
  position: relative;
  /* display: flex; */
  .circle {
    position: absolute;
    bottom: -30px;
    right: 0px;
    width: 100%;
    height: 500px;
    z-index: -1;
    background-color: #b7e2ef;
    clip-path: circle(900px at right 1150px);
    @media (max-width: ${({ theme }) => theme.dont}) {
      clip-path: circle(900px at left 1200px);
    }
    /* @media screen and (min-height: 400px) and (max-height: 600px) {
      clip-path: circle(600px at left 1000px);
    } */
  }
  .home {
    display: flex;
    padding: 0 5rem;
    &-left {
      /* position: relative; */
      flex: 30%;
      .human {
        position: relative;
        max-width: 270px;
      }
      .bell {
        position: absolute;
        max-width: 120px;
        transform: rotate(40deg);
        bottom: 0;
        /* mix-blend-mode: darken; */
      }
    }
    &-right {
      flex: 70%;
      padding-top: 4rem;
      padding-left: 4rem;

      h1 {
        color: #b7e2ef;
        font-size: 5rem;
        .calc {
          color: #000;
        }
      }
    }
  }
`;
