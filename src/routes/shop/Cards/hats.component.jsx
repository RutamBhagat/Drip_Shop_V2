import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context";
import IndividualComponent from "./individualComponent";

const Hats = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {products &&
        products.map((product) => {
          return (
            <IndividualComponent key={product.id} product={product} />
          );
        })}
    </div>
  );
};

export default Hats;
