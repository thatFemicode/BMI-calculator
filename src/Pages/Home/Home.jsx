import React from "react";
import { HomeStyled } from "./HomeStyled";
import { Link } from "react-router-dom";
import { OuterLayout } from "../../Layout/Layout";
import image from "../../img/fit.png";
import bell from "../../img/dumbell.jpg";
const Home = () => {
  return (
    <HomeStyled>
      <div className="circle"></div>
      <OuterLayout>
        <div className="home">
          <div className="home-left">
            <img className="human" src={image} alt="" />
            <img className="bell" src={bell} alt="" />
          </div>
          <div className="home-right">
            <div className="home-right-heading">
              <h1>
                BMI <br /> <span className="calc">Calculator</span>
              </h1>
            </div>
            <div className="home-right-content">
              <p>Wondering what your total body mass is, Look no more </p>
            </div>
          </div>
        </div>
      </OuterLayout>
    </HomeStyled>
  );
};

export default Home;
