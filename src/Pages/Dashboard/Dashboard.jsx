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
  let [img, setImg] = useState();
  const [user] = useState(JSON.parse(localStorage.getItem("name")));
  const image = useRef(null);
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
        setMessage(`${user} You are underweight`);
        setImg(underweight);
      } else if (bmi >= 19 && bmi < 25) {
        setMessage(`${user} You are a healthy weight`);
        setImg(healthy);
      } else {
        setMessage(`${user} You are overweight`);
        setImg(overweight);
      }
    }
  };
  useEffect(() => {});
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
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
            <img src={img} alt="" />
          </div>
        </div>
      </OuterLayout>
    </DashboardStyled>
  );
};

export default Dashboard;
