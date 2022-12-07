import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import ShopDisplay from "./shopDisplay.component";
import IndividualCategory from "./Cards/individualCategory.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/category.actions";

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // This is for setting up shop items to firestore db first time
    // addCollectionAndDocuments("categories", SHOP_DATA)

    const getCategoriesMap = async () => {
      const categoryMap = getCategoriesAndDocuments();
      categoryMap.then((res) => dispatch(setCategoriesMap(res)));
    };

    getCategoriesMap();
  }, []);

  return (
    <div className="grid min-h-screen px-4 pt-[15vh]">
      <Routes>
        <Route index element={<ShopDisplay />} />
        <Route
          path={"womens"}
          element={<IndividualCategory target={"womens"} />}
        />
        <Route path={"mens"} element={<IndividualCategory target={"mens"} />} />
        <Route path={"hats"} element={<IndividualCategory target={"hats"} />} />
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
    </div>
  );
};

export default Shop;
