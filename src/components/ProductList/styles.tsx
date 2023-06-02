import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid silver;
  padding: 20px;
  border-radius: 6px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 30px;
  overflow: auto;
`;

export const ProductBlock = styled.div`
  border: 2px solid silver;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Img = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid silver;
  border-radius: 6px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
`;

export const ButtonBlock = styled.div`
  width: 100%;
  text-align: right;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: 2px solid silver;
  border-radius: 6px;
  padding: 10px 20px;
  background-color: silver;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: silver;
  }
`;
