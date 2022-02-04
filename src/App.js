// import "./App.css";
import { ThemeProvider } from "styled-components";
import { MainStyled } from "./MainStyled";
import CustomRoute from "./Components/CustomSwitch/CustomSwitch";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Input from "./Pages/Input/Input";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useRef } from "react";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  adapt: "399px",
  se: "330px",
  teams: "350px",
  foot: "375px",
  max: "415px",
  mobil: "430px",
  blogNav: "610px",
  images: "680px",
  text: "810px",
  min: "520px",
  make: "548px",
  image: "900px",
  mobile: "500px",
  desktop: "769px",
  player: "751px",
  dont: "1020px",
  service: "900px",
  balls: "930px",
  post: "940px",
  hero: "992px",
  kobe: "1200px",
  mind: "1100px",
  mins: "1300px",
  minsx: "1280px",
  minss: "1500px",
  team: "1700px",
  auth: "1800px",
  img: "1201px",
};
function App() {
  let nav = useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <Navbar ref={nav} />
      <MainStyled>
        <CustomRoute>
          <Route path="/" element={<Home ref={nav} />} />
          <Route path="/input" element={<Input ref={nav} />} />
          <Route path="/dashboard" element={<Dashboard ref={nav} />} />
        </CustomRoute>
      </MainStyled>
    </ThemeProvider>
  );
}

export default App;
