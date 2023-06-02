import React, { useCallback, useEffect, useMemo, useState } from "react";
import Categories from "../../components/Categories";
import ProductList from "../../components/ProductList";
import { fetchStores } from "../../redux/store/asyncActions";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/slice";
import { cartSelector } from "../../redux/cart/selectors";
import { IProductProps, IStore } from "../../utils/types";
import { storesSelector } from "../../redux/store/selectors";
import * as S from "./styles";
import { RootState } from "../../redux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

const Home = () => {
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const stores: IStore[] | null = useSelector(storesSelector);
  const cartItems = useSelector(cartSelector);

  useEffect(() => {
    dispatch(fetchStores());
  }, [dispatch]);

  const [displayedContent, setDisplayedContent] = useState<string>(() => {
    return (
      localStorage.getItem("displayedContent") ||
      ((stores && stores[0]?._id) as string)
    );
  });

  useEffect(() => {
    if (!displayedContent) {
      setDisplayedContent(stores && stores[0]?._id);
    }

    localStorage.setItem("displayedContent", displayedContent);
  }, [displayedContent, stores]);

  const shopFiltered = useMemo(() => {
    return stores && stores.find((obj: IStore) => obj._id === displayedContent);
  }, [stores, displayedContent]);

  const isCategoryDisabled = useMemo(() => {
    return cartItems.some(
      (item) => item.vendor?._id === shopFiltered?._id && item.count > 0
    );
  }, [cartItems, shopFiltered]);

  const addCart = useCallback(
    (product: IProductProps) => {
      const productIndex = cartItems.findIndex(
        (item: IProductProps) => item.name === product.name
      );

      if (productIndex !== -1) {
        dispatch(removeFromCart(productIndex.toString()));
      } else {
        dispatch(addToCart(product));
      }
    },
    [cartItems, dispatch]
  );

  return (
    <S.Content>
      {stores ? (
        <>
          <Categories
            stores={stores}
            displayedContent={displayedContent}
            setDisplayedContent={setDisplayedContent}
            isCategoryDisabled={isCategoryDisabled}
          />
          {shopFiltered && shopFiltered.products ? (
            <ProductList
              shopFiltered={shopFiltered}
              addToCart={addCart}
              cartItems={cartItems}
            />
          ) : (
            <div>No products available</div>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </S.Content>
  );
};

export default Home;
