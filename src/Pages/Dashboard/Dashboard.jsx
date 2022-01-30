import React, { useState } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { DashboardStyled } from "./DashboardStyled";
import overweight from "../../img/over.png";
import healthy from "../../img/fit.png";
import underweight from "../../img/under.png";
const Dashboard = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  let [img, setImg] = useState();
  return (
    <DashboardStyled>
      <OuterLayout>
        <div className="dashboard">
          <div className="dashboard-left">
            <div className="auth-form-container-fields">
              <div className="auth-form-container-fields-content">
                <p>Calculator</p>
                <form>
                  <div className="auth-form-container-fields-content-input">
                    <label htmlFor="phoneNumber">Weight:</label>
                    <input
                      name="weight"
                      type="number"
                      placeholder="Input Weight"
                      // onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="auth-form-container-fields-content-input">
                    <label htmlFor="phoneNumber">Height:</label>
                    <input
                      name="height"
                      type="number"
                      placeholder="Input Height"
                      // onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="auth-form-container-fields-content-button">
                    <button>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="dashboard-right">
            <img src={overweight} alt="" />
          </div>
        </div>
      </OuterLayout>
    </DashboardStyled>
  );
};

export default Dashboard;
