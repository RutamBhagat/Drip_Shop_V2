import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShopDisplay from "./shopDisplay.component";
import IndividualCategory from "./individualCategory.component";
import { fetchCategoriesAsync } from "../../store/categories/category.actions";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.components";

const Shop = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
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
