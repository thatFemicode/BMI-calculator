import styled from "styled-components";

export const HomeStyled = styled.main`
  padding: 0 12rem;
  padding-top: 5rem;

  .home {
    display: flex;

    &-left {
      position: relative;
      flex: 30%;
      .human {
        position: relative;
        max-width: 275px;
      }
      .bell {
        position: absolute;
        max-width: 120px;
        transform: rotate(40deg);
        bottom: 0;
      }
    }
    &-right {
      flex: 70%;
      padding-top: 4rem;
      padding-left: 4rem;

      /* .square-animation-wrapper {
        position: relative;
        perspective: 3000px;
        opacity: 1;
        animation: 2s linear 2s 1 normal forwards paused;
        visibility: hidden;
        will-change: opacity;
        display: block;

        div {
          position: absolute;
          width: 300px;
          height: 300px;
          border: 1px solid #000;
          border-radius: 80px;
          top: 0px;
          opacity: 1;
          animation: dash 50s linear 0s infinite running;
          transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
          will-change: transform;

          &.square1 {
            transform: translate(10px, 10px);
            border: 2px solid rgba(255, 255, 255, 0.5);
            animation-delay: 0.2s;
            animation-duration: 60s;
          }
          &.square2 {
            transform: translate(20px, 20px);
            border: 1.5px solid rgba(255, 255, 255, 0.4);
            animation-delay: 0.4s;
            animation-duration: 24s;
          }
          &.square3 {
            transform: translate(30px, 30px);
            border: 1.5px solid rgba(255, 255, 255, 0.4);
            animation-delay: 0.4s;
            animation-duration: 24s;
          }
          &.square4 {
            transform: translate(40px, 40px);
            border: 1.5px solid rgba(255, 255, 255, 0.4);
            animation-delay: 0.4s;
            animation-duration: 24s;
          }
          &.square5 {
            transform: translate(50px, 50px);
            border: 1.5px solid rgba(255, 255, 255, 0.4);
            animation-delay: 0.4s;
            animation-duration: 24s;
          }
          &.square6 {
            transform: translate(60px, 60px);
            border: 1.5px solid rgba(255, 255, 255, 0.4);
            animation-delay: 0.4s;
            animation-duration: 24s;
          }
          &.square7 {
            transform: translate(70px, 70px);
            border: 1.5px solid rgba(255, 255, 255, 0.4);
            animation-delay: 3s;
            animation-duration: 24s;
          }
          &.square8 {
            transform: translate(80px, 80px);
            border: 1.5px solid rgba(255, 255, 255, 0.4);
            animation-delay: 0.4s;
            animation-duration: 24s;
          }
        }
      } */
      h1 {
        color: #ff6700;
        font-size: 4.5rem;
        .calc {
          color: #000;
        }
      }
    }
  }
  @keyframes dash {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(3600deg);
    }
  }
  @keyframes opac {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
