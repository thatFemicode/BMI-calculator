import React from "react";
import { CardStyled } from "./CardStyled";

const Card = ({ item }) => {
  const { number, text, id } = item;
  return (
    <CardStyled>
      <h1>{number}</h1>
      <div className="text">
        <p> {text} </p>
        <p>{id === 1 ? "😩" : "😎"}</p>
      </div>
    </CardStyled>
  );
};

export default Card;
