import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid silver;
  border-radius: 6px;
  padding: 40px;
  text-align: center;
  height: 100%;
  width: 20%;
  overflow: auto;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

interface IButtonProps {
  active: boolean;
  backgroundColor: string;
  color: string;
  cursor: string;
}

export const Block = styled.button<IButtonProps>`
  width: 100%;
  padding: 20px;
  font-size: 16px;
  border: 2px solid silver;
  border-radius: 4px;
  transition: all 0.2s ease;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};

  &:hover,
  &:active,
  ${({ active }) => active && "&"} {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
