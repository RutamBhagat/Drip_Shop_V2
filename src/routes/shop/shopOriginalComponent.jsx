import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ShopCardOriginal from "./shopCardOriginal.component";

const shopOriginal = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="mt-36">
      {products.map(({ id, name }, index) => (
        <ShopCardOriginal key={id} name={name} index={index} />
      ))}
    </div>
  );
};

export default shopOriginal;
