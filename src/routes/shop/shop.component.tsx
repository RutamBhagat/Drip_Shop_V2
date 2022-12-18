import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.components";
import { useDispatch, useSelector } from "react-redux";
import ShopDisplay from "./shopDisplay.component";
import IndividualCategory from "./individualCategory.component";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { fetchCategoriesStart } from '../../store/categories/category.actions';

const Shop = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <div className="grid min-h-screen px-4 pt-[15vh]">
      {isLoading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route index element={<ShopDisplay />} />
          <Route
            path={"womens"}
            element={<IndividualCategory target={"womens"} />}
          />
          <Route
            path={"mens"}
            element={<IndividualCategory target={"mens"} />}
          />
          <Route
            path={"hats"}
            element={<IndividualCategory target={"hats"} />}
          />
          <Route
            path={"suits"}
            element={<IndividualCategory target={"suits"} />}
          />
          <Route
            path={"jackets"}
            element={<IndividualCategory target={"jackets"} />}
          />
          <Route
            path={"sneakers"}
            element={<IndividualCategory target={"sneakers"} />}
          />
        </Routes>
      )}
    </div>
  );
};

export default Shop;
