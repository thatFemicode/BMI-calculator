import React, { useRef, useEffect, forwardRef } from "react";
import { HomeStyled } from "./HomeStyled";

import { OuterLayout } from "../../Layout/Layout";
import image from "../../img/fit.png";
import bell from "../../img/dumbell.jpg";
import data from "./data";
import Card from "../../Components/Card/Card";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { TweenMax, TimelineMax, Power3, Power4, gsap } from "gsap";
const Home = forwardRef(({ children }, ref) => {
  let screen = useRef(null);
  let body = useRef(null);
  const tl = gsap.timeline();
  useEffect(() => {
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    })
      .to(screen, {
        duration: 1.2,
        left: "100%",
        ease: Power3.easeInOut,
        delay: 0.3,
      })
      .set(screen, { left: "-100%" })
      .from(ref.current, {
        duration: 0.3,
        opacity: 0,
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      })
      .to(body, {
        duration: 0.3,
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      });
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
