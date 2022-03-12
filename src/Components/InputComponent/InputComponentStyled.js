import styled from "styled-components";

export const InputComponentStyled = styled.div``;
export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  /* padding-left: 2rem; */
  border: 1px solid;
  border-radius: 5px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.images}) {
    width: 100%;
  }
`;

export const TextInput = styled.input`
  /* flex: 1 0; */
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;
export const Icon = styled.div`
  flex: 0 0;
  cursor: pointer;
`;
