import React, { useRef, useEffect, forwardRef } from "react";
import { HomeStyled } from "./HomeStyled";
import { Link } from "react-router-dom";
import { OuterLayout } from "../../Layout/Layout";
import image from "../../img/fit.png";
import bell from "../../img/dumbell.jpg";
import data from "./data";
import Card from "../../Components/Card/Card";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
const Home = forwardRef(({ children }, ref) => {
  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(ref.current, 0.3, {
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut,
    }).delay(1);
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(2);
    return () => {
      TweenMax.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  }, []);
  return (
    <>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <HomeStyled
        data-barba="container"
        ref={(el) => (body = el)}
        className="Headd"
      >
        <div className="circle"></div>
        <OuterLayout>
          <div className="home">
            <div className="home-left">
              <img className="human" src={image} alt="" />
              <img className="bell" src={bell} alt="" />
            </div>
            <div className="home-right">
              <div className="home-right-heading">
                <h1 className="heading">
                  BMI <br /> <span className="calc">Calculator</span>
                </h1>
              </div>
              <div className="home-right-text">
                <p className="main-text">
                  Wondering what your total body mass is, Look no more and
                  checkout this awesome tool, with two simple steps, click the
                  button below to begin.
                </p>
              </div>
              <PrimaryButton name={"Get Started"} />
              <div className="home-right-card">
                {data.map((item, index) => {
                  const { id } = item;
                  return <Card key={id} item={item} />;
                })}
              </div>
            </div>
          </div>
        </OuterLayout>
      </HomeStyled>
    </>
  );
});

export default Home;
