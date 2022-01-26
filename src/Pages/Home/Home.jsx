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
        <img src={image} alt="" />
        <img src={bell} alt="" />
      </OuterLayout>
    </HomeStyled>
  );
};

export default Home;
