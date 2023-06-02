import React from "react";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <S.Button to="/">Shop</S.Button>
      <S.Button to="/cart">Shopping Cart</S.Button>
    </S.Container>
  );
};

export default Header;
