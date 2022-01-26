import React from "react";
import { NavbarStyled } from "./NavbarStyled";
import { OuterLayout } from "../../Layout/Layout";
// import logo from "./img/GSW.svg";
import logo from "./img/slack.svg";

import { Link } from "react-router-dom";
// import { useGlobalContext } from "../../Context/context.js";

const Navbar = () => {
  return (
    <NavbarStyled>
      <OuterLayout>
        <div className="navigation">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="hashtag">
            <Link to="dashboard">DashBoard</Link>
          </div>
        </div>
      </OuterLayout>
    </NavbarStyled>
  );
};

export default Navbar;
