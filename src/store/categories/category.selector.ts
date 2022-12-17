import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoriesState } from "./category.reducer";
import { Category, CategoryMap } from "./category.types";

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategoriesArr = createSelector(
  [selectCategoryReducer],
  (categoriesReducer) => categoriesReducer.categories
);

export const selectCategories = createSelector(
  [selectCategoriesArr],
  (categories) =>
    categories.reduce((accumulator: CategoryMap, category: Category) => {
      const { title, items, displayImg } = category;
      accumulator[title.toLowerCase()] = { items, displayImg };
      return accumulator;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesReducer) => categoriesReducer.isLoading
);
