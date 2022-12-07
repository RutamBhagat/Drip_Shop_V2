import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// This is for setting up shop items to firestore db first time
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data"

export const CategoriesContext  = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };
  
  useEffect(() => {
    // This is for setting up shop items to firestore db first time
    // addCollectionAndDocuments("categories", SHOP_DATA)

    const getCategoriesMap = async () => {
      const categoryMap = getCategoriesAndDocuments()
      categoryMap.then(res => setCategoriesMap(res))
    } 

    getCategoriesMap()
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
