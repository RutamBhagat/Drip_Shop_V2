import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopDisplay from "./shopDisplay.component"
import IndividualCategory from "./Cards/individualCategory.component";

const Shop = () => {
  return (
    <div className="grid min-h-screen px-4 pt-[15vh]">
      <Routes>
        <Route index element={<ShopDisplay />} />
        <Route path={"womens"} element={<IndividualCategory target={"womens"} />} />
        <Route path={"mens"} element={<IndividualCategory target={"mens"} />} />
        <Route path={"hats"} element={<IndividualCategory target={"hats"} />} />
        <Route path={"suits"} element={<IndividualCategory target={"suits"} />} />
        <Route path={"jackets"} element={<IndividualCategory target={"jackets"} />} />
        <Route path={"sneakers"} element={<IndividualCategory target={"sneakers"} />} />
      </Routes>
    </div>
  );
};

export default Shop;
