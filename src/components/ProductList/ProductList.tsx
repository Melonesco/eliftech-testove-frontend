import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cart/slice";
import { ICartProps, IProduct, IProductProps, IStore } from "../../utils/types";
import * as S from "./styles";

interface IProductListProps {
  shopFiltered: IStore;
  addToCart: (product: IProductProps) => void;
  cartItems: IProductProps[];
}

const ProductList: React.FC<IProductListProps> = ({
  shopFiltered,
  addToCart,
  cartItems,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(
    (product: IProduct) => {
      const productWithShop: IProductProps = {
        ...product,
        count: 1,
        vendor: shopFiltered,
      };

      const isAddedToCart = cartItems.find(
        (item: ICartProps) => item.name === product.name
      );

      if (isAddedToCart) {
        dispatch(removeFromCart(isAddedToCart._id));
      } else {
        addToCart(productWithShop);
      }
    },
    [cartItems, dispatch, shopFiltered, addToCart]
  );

  return (
    <S.Container>
      {shopFiltered.products.map((product: IProduct) => (
        <S.ProductBlock key={product._id}>
          <S.Img></S.Img>
          <S.Text>{product.name}</S.Text>
          <S.Text>Price: {product.price}</S.Text>
          <S.ButtonBlock>
            <S.Button onClick={() => handleAddToCart(product)}>
              {cartItems.find(
                (item: IProductProps) => item.name === product.name
              )
                ? "Added"
                : "Add to Cart"}
            </S.Button>
          </S.ButtonBlock>
        </S.ProductBlock>
      ))}
    </S.Container>
  );
};

export default ProductList;
