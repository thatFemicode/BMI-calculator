import React from "react";
import { HomeStyled } from "./HomeStyled";
import { Link } from "react-router-dom";
import { OuterLayout } from "../../Layout/Layout";
import image from "../../img/fit.png";
import bell from "../../img/dumbell.jpg";
import data from "./data";
import Card from "../../Components/Card/Card";
import PrimaryButton from "../../Components/Button/PrimaryButton";

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
  );
};

export default Home;
