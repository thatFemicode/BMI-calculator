import React, { useState } from "react";
import { InputStyled } from "./InputStyled";
import { OuterLayout } from "../../Layout/Layout";
import InputComponent from "../../Components/InputComponent/InputComponent";
import over from "../../img/over.png";
import { useNavigate } from "react-router";
import Card from "../../Components/Card/Card";
import data from "./data";

const Input = () => {
  const [name, setName] = useState("");
  // const [data, setData] = useState(datas);
  const navigate = useNavigate();
  // const [user] = useState(JSON.parse(localStorage.getItem("name")));
  const onSubmit = () => {
    localStorage.setItem("name", JSON.stringify(name));
    navigate("/dashboard");
  };
  // console.log(user);
  return (
    <InputStyled>
      <OuterLayout>
        <div className="input">
          <div className="input-left">
            <img src={over} alt="" />
            <div className="input-left-card">
              {/* <Card item={data} /> */}
              {data.map((item, _) => {
                const { id } = item;
                return <Card key={id} item={item} />;
              })}
            </div>
          </div>
          <div className="input-right">
            <h1>Input name below</h1>
            <form onSubmit={onSubmit}>
              <InputComponent name={name} setName={setName} />
            </form>
            <button onClick={onSubmit}>
              <svg
                default=""
                viewBox="0 0 56 56"
                // xml:space="preserve"
              >
                <polygon points="31.3,26.8 23.5,19 22.8,19.7 30.6,27.5 22.8,35.3 23.5,36 31.3,28.2 32,27.5"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </OuterLayout>
    </InputStyled>
  );
};

export default Input;
