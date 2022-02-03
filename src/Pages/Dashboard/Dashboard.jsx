import React, { useState, useEffect, useRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { DashboardStyled } from "./DashboardStyled";
import overweight from "../../img/over.png";
import healthy from "../../img/fit.png";
import underweight from "../../img/under.png";
import { gsap } from "gsap";
// import {Link} from "re"
const Dashboard = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  let [img, setImg] = useState();
  const [user] = useState(JSON.parse(localStorage.getItem("name")));
  let image = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let tl = gsap.timeline();
  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 1;
      setBmi(bmi.toFixed(1));

      // Logic for message
      if (bmi < 1) {
        setMessage("You really need to do something about your eating");
        setImg(null);
      } else if (bmi < 18) {
        setText(`Your Bmi is ${bmi.toFixed(1)}`);
        setMessage(`${user}, You are underweight`);
        setImg(underweight);
      } else if (bmi >= 19 && bmi < 25) {
        setText(`Your Bmi is ${bmi.toFixed(1)}`);
        setMessage(`${user}, you are a healthy weight`);
        setImg(healthy);
      } else {
        setText(`Your Bmi is ${bmi.toFixed(1)}`);
        setMessage(`${user}, You are overweight`);
        setImg(overweight);
      }
    }
  };
  useEffect(() => {
    tl.from(image, {
      duration: 2,
      opacity: 0,
      y: 200,
      ease: "power3.inOut",
    })
      .from(
        text1,
        {
          duration: 2,
          opacity: 0,
          x: 200,
          ease: "power3.inOut",
        },
        "=-1"
      )
      .from(
        text2,
        {
          duration: 2,
          opacity: 0,
          x: 200,
          ease: "power3.inOut",
        },
        "=-1"
      );
  }, [img]);
  return (
    <DashboardStyled>
      <OuterLayout>
        <div className="dashboard">
          <div className="dashboard-left">
            <div className="auth-form-container-fields">
              <div className="auth-form-container-fields-content">
                <p>Calculator</p>
                <form onSubmit={calcBmi}>
                  <div className="auth-form-container-fields-content-input">
                    <label htmlFor="phoneNumber">Weight (Kg):</label>
                    <input
                      name="weight"
                      type="number"
                      placeholder="Input Weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />
                  </div>
                  <div className="auth-form-container-fields-content-input">
                    <label htmlFor="phoneNumber">Height (M):</label>
                    <input
                      name="height"
                      type="number"
                      placeholder="Input Height"
                      value={height}
                      onChange={(event) => setHeight(event.target.value)}
                      required
                    />
                  </div>
                  <div className="auth-form-container-fields-content-button">
                    <button onClick={calcBmi}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="dashboard-right">
            <div className="right">
              <img ref={(el) => (image = el)} src={img} alt="" />
            </div>
            <div className="left">
              <h3 ref={(el) => (text1 = el)}>{text}</h3>
              <p ref={(el) => (text2 = el)}>{message}</p>
            </div>
          </div>
        </div>
      </OuterLayout>
    </DashboardStyled>
  );
};

export default Dashboard;
