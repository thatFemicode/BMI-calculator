import React, { useState } from "react";
import { InputStyled } from "./InputStyled";
import { OuterLayout } from "../../Layout/Layout";
import InputComponent from "../../Components/InputComponent/InputComponent";
import over from "../../img/over.png";
const Input = () => {
  const [name, setName] = useState("");

  const onSubmit = () => {
    localStorage.setItem("name", JSON.stringify(name));
  };
  return (
    <InputStyled>
      <OuterLayout>
        <div className="input">
          <div className="input-left">
            <img src={over} alt="" />
          </div>
          <div className="input-right">
            <h1>Input name below</h1>
            <form onSubmit={onSubmit}>
              <InputComponent name={name} setName={setName} />
            </form>
          </div>
        </div>
      </OuterLayout>
    </InputStyled>
  );
};

export default Input;
