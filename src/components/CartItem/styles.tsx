import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid silver;
  padding: 20px;
  border-radius: 6px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  grid-gap: 30px;
  overflow: auto;
`;

export const Block = styled.div`
  border: 2px solid silver;
  border-radius: 6px;
  width: 100%;
  height: 260px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const Img = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid silver;
  border-radius: 6px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
`;

export const QuantityBlock = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 40px;
  border: 2px solid silver;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
  text-align: center;
`;

interface ButtonProps {
  bottom?: boolean;
}

export const Button = styled.div<ButtonProps>`
  position: absolute;
  right: 0;
  ${({ bottom }) => (bottom ? "bottom: 0;" : "top: 0;")}
  border: none;
  border-radius: ${({ bottom }) => (bottom ? "0 0 10px 0;" : "0 10px 0 0;")}
  background-color: transparent;
  padding: 0 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: silver;
  }
`;

export const ButtonRemove = styled.div`
  padding: 10px 20px;
  background-color: rgba(200, 100, 0, 0.2);
  border: 2px solid silver;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: transparent;
  }
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;
