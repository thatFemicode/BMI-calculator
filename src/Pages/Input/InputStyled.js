import styled from "styled-components";

export const InputStyled = styled.main`
  padding-top: 5rem;
  height: 100vh;
  width: 100%;
  position: relative;
  background: linear-gradient(90deg, #fff 60%, #b7e2ef 40%);
  /* display: flex; */
  @media (max-width: ${({ theme }) => theme.images}) {
    background: unset;
  }
`;
