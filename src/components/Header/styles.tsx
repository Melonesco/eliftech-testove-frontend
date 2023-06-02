import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 30px;
  z-index: 100;
`;

export const Button = styled(Link)`
  background-color: darkred;
  padding: 8px 20px;
  color: #ffffff;
  font-weight: bold;
  border: 2px solid darkred;
  border-radius: 2px;
  transition: all 0.2s ease;

  &:hover {
    color: #000000;
    background-color: transparent;
  }
`;
