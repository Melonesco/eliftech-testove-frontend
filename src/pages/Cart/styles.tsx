import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 100%;
  border: 2px solid silver;
  border-radius: 6px;
  padding: 20px 100px 20px 20px;
`;

export const Label = styled.label`
  font-size: 14px;
`;
export const Input = styled.input`
  margin-top: 5px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 2px solid silver;
  outline: none;
  font-size: 18px;
  padding: 0 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 80px 60px 80px;
  gap: 60px;
  height: 90vh;
`;

export const Submit = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 60px;
  padding: 0 80px;
`;

export const Info = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 10px 40px;
  border: 2px solid silver;
  border-radius: 6px;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
