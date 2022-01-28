import React, { useState, useEffect } from "react";
import { ReactComponent as Clear } from "./clear.svg";
import { Container, TextInput, Icon } from "./InputComponentStyled";
const InputComponent = ({ name, setName }) => {
  //   const [inputValue, setInputValue] = useState("");
  //   useEffect(() => {
  //     // storing input name
  //     localStorage.setItem("name", JSON.stringify(name));
  //   }, [name]);
  return (
    <Container>
      <TextInput
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <Icon>
        <Clear
          width="20px"
          height="20px"
          stroke="black"
          onClick={() => {
            setName("");
          }}
        />
      </Icon>
    </Container>
  );
};

export default InputComponent;
