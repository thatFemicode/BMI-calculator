import React from "react";
import { OuterLayout } from "../../Layout/Layout";
import { DashboardStyled } from "./DashboardStyled";

const Dashboard = () => {
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
          <div className="dashboard-right"></div>
        </div>
      </OuterLayout>
    </DashboardStyled>
  );
};

export default Dashboard;
