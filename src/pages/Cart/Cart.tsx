import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import CartItem from "../../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, totalPriceSelector } from "../../redux/cart/selectors";
import { IFormData } from "../../utils/types";
import * as S from "./styles";
import { instance } from "../../axios";
import { clearCart } from "../../redux/cart/slice";

const userForm: IFormData = {
  name: "",
  email: "",
  tel: "",
  address: "",
  vendor: null,
  products: [],
  totalPrice: 0,
};

const Cart = () => {
  const cart = useSelector(cartSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<IFormData>(userForm);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevFormData: IFormData) => ({
        ...prevFormData,
        [name]: value,
        vendor: cart[0].vendor,
        products: cart.map(({ vendor, count, ...rest }) => ({
          product: { ...rest },
          amount: count,
        })),
        totalPrice,
      }));
    },
    [cart, totalPrice]
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const { name, email, tel, address } = formData;

      if (totalPrice > 0 && name && email && tel && address) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert("Некоректний формат електронної пошти");
          return;
        }

        if (!/^\d{10}$/.test(tel)) {
          alert("Некоректний формат телефонного номеру (10 чисел)");
          return;
        }

        try {
          await instance.post("/delivery", formData);

          alert("Ви відправили дані, очікуйте відповіді");

          setFormData(userForm);
          dispatch(clearCart());
          localStorage.removeItem("cart");
          localStorage.removeItem("totalPrice");
        } catch (error) {
          console.error("Error while sending data to MongoDB", error);
        }
      } else {
        if (totalPrice === 0) {
          alert("Ви нічого не вибрали");
        } else {
          alert("Будь ласка, заповніть всі поля");
        }
      }
    },
    [formData, totalPrice, dispatch]
  );

  return (
    <form onSubmit={handleSubmit}>
      <S.Content>
        <S.Container>
          <S.Label>
            Name:
            <S.Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </S.Label>
          <S.Label>
            Email:
            <S.Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </S.Label>
          <S.Label>
            Phone:
            <S.Input
              type="tel"
              name="tel"
              value={formData.tel}
              onChange={handleInputChange}
            />
          </S.Label>
          <S.Label>
            Address:
            <S.Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </S.Label>
        </S.Container>
        <CartItem cart={cart} />
      </S.Content>
      <S.Submit>
        <S.Info>Total price: {totalPrice}</S.Info>
        <S.Button type="submit">Submit</S.Button>
      </S.Submit>
    </form>
  );
};

export default Cart;
