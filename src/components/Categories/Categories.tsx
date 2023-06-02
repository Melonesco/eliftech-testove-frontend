import React from "react";
import * as S from "./styles";
import { IStore } from "../../utils/types";

interface ICategories {
  stores: IStore[];
  displayedContent: string;
  setDisplayedContent: React.Dispatch<React.SetStateAction<string>>;
  isCategoryDisabled: boolean;
}

const Categories = ({
  stores,
  displayedContent,
  setDisplayedContent,
  isCategoryDisabled,
}: ICategories) => {
  const handleCategoryClick = (storeId: string) => {
    if (!isCategoryDisabled) {
      setDisplayedContent(storeId);
    }
  };

  return (
    <S.Container>
      <S.Title>Shops:</S.Title>
      <S.Blocks>
        {stores.map((obj: IStore) => (
          <S.Block
            onClick={() => handleCategoryClick(obj._id)}
            active={displayedContent === obj._id}
            disabled={isCategoryDisabled}
            backgroundColor={
              displayedContent !== obj._id && isCategoryDisabled
                ? "darkred"
                : "transparent"
            }
            color={
              displayedContent !== obj._id && isCategoryDisabled
                ? "white"
                : "none"
            }
            cursor={
              displayedContent !== obj._id && isCategoryDisabled
                ? "not-allowed"
                : "pointer"
            }
            key={obj._id}
          >
            {obj.shop}
          </S.Block>
        ))}
      </S.Blocks>
    </S.Container>
  );
};

export default Categories;
