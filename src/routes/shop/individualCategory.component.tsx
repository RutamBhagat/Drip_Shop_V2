import React from "react";
import IndividualComponent from "./Cards/individualCard.component";
import { useSelector } from "react-redux";
import { selectCategories } from '../../store/categories/category.selector';


type IndividualCategoryProps = {
  target: string
}

const IndividualCategory = ({target}: IndividualCategoryProps) => {
  const categoriesMap = useSelector(selectCategories);
  
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
