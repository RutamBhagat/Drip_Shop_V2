import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// This is for setting up shop items to firestore db first time
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: {},
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const value = { products, setProducts };
  
  useEffect(() => {
    // This is for setting up shop items to firestore db first time
    // addCollectionAndDocuments("categories", SHOP_DATA)

    const getCategoriesMap = async () => {
      const categoryMap = getCategoriesAndDocuments()
      categoryMap.then(res => setProducts(res))
    } 

    getCategoriesMap()
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
