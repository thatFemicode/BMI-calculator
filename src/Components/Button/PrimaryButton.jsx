import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.3rem;
  border-color: transparent;
  color: #000;
  background-color: #b7e2ef;
  cursor: pointer;
  margin-top: 1rem;
  @media (max-width: ${({ theme }) => theme.make}) {
    /* max-width: 400px; */
    font-size: 0.7rem;
    padding: 0.15rem 0.55rem;
  }
`;
const PrimaryButton = ({ name }) => {
  return (
    <ButtonStyled>
      <Link to="/input">{name}</Link>
    </ButtonStyled>
  );
};

export default PrimaryButton;
