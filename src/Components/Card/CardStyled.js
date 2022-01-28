import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  justify-content: space-between;
  width: 30%;
  h1 {
    font-size: 3rem;
    font-weight: 400;
    opacity: 0.9;
    @media (max-width: ${({ theme }) => theme.dont}) {
      font-size: 2.5rem;
    }
    @media (max-width: ${({ theme }) => theme.images}) {
      font-size: 2rem;
    }
  }
  p {
    text-transform: capitalize;
    font-size: 0.8rem;
    margin-left: 0.8rem;
    @media (max-width: ${({ theme }) => theme.dont}) {
      font-size: 0.7rem;
    }
    @media (max-width: ${({ theme }) => theme.images}) {
      font-size: 0.65rem;
    }
  }
`;
