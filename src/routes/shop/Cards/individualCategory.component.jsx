import React, { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../../../contexts/products.context";
import IndividualComponent from "./individualCard.component";

const IndividualCategory = ({target}) => {
  const { products } = useContext(ProductsContext);
  const [targetItems, setTargetItems] = useState([])
  
  useEffect(() => {
    for(let inst of products){
      if (inst.title === target){
        setTargetItems(inst.items)
        console.log(inst.items)
        break
      }
    }
  }, [products])
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {targetItems.map((product) => {
          return (
            <IndividualComponent key={product.id} product={product} />
          );
        })}
    </div>
  );
};

export default IndividualCategory;
