import React from "react";
import { HomeStyled } from "./HomeStyled";
import { Link } from "react-router-dom";
import { OuterLayout } from "../../Layout/Layout";
import image from "../../img/fit.png";
import bell from "../../img/dumbell.jpg";
const Home = () => {
  return (
    <HomeStyled>
      <OuterLayout>
        <div className="home">
          <div className="home-left">
            <img className="human" src={image} alt="" />
            <img className="bell" src={bell} alt="" />
          </div>
          <div className="home-right">
            <div className="square-animation-wrapper">
              <div className="square1"></div>
              <div className="square2"></div>
              <div className="square3"></div>
              <div className="square4"></div>
              <div className="square5"></div>
              <div className="square6"></div>
              <div className="square7"></div>
              <div className="square8"></div>
            </div>
            <h1>
              BMI <br /> <span className="calc">Calculator</span>
            </h1>
          </div>
        </div>
      </OuterLayout>
    </HomeStyled>
  );
};

export default Home;
