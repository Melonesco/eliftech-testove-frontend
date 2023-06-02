import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  decrementCount,
  incrementCount,
  removeFromCart,
} from "../../redux/cart/slice";
import { ICartProps } from "../../utils/types";
import * as S from "./styles";

interface ICartItem {
  cart: ICartProps[];
}

const CartItem = ({ cart }: ICartItem) => {
  const dispatch = useDispatch();

  const handleIncrement = useCallback(
    (itemId: string) => {
      dispatch(incrementCount(itemId));
    },
    [dispatch]
  );

  const handleDecrement = useCallback(
    (itemId: string) => {
      dispatch(decrementCount(itemId));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (itemId: string) => {
      dispatch(removeFromCart(itemId));
    },
    [dispatch]
  );

  return (
    <S.Container>
      {cart.length > 0 ? (
        cart.map((item: ICartProps) => (
          <S.Block key={item._id}>
            <S.Img></S.Img>
            <S.Info>
              <div>
                <S.Text>{item.name}</S.Text>
                <S.Text>Price: {item.price}</S.Text>
              </div>
              <S.QuantityBlock>
                <S.Input type="number" value={item.count || 0} readOnly />
                <S.Button onClick={() => handleIncrement(item._id)}>⮝</S.Button>
                <S.Button bottom onClick={() => handleDecrement(item._id)}>
                  ⮟
                </S.Button>
              </S.QuantityBlock>
              <S.ButtonRemove onClick={() => handleRemove(item._id)}>
                Remove
              </S.ButtonRemove>
            </S.Info>
          </S.Block>
        ))
      ) : (
        <S.Empty>Empty...</S.Empty>
      )}
    </S.Container>
  );
};

export default CartItem;
