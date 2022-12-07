import React, { useContext } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import IndividualComponent from "./individualCard.component";

const IndividualCategory = ({target}) => {
  const { categoriesMap } = useContext(CategoriesContext);
  
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {categoriesMap[target] && categoriesMap[target].items.map((product) => {
          return (
            <IndividualComponent key={product.id} product={product} />
          );
        })}
    </div>
  );
};

export default IndividualCategory;
