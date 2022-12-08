import { createSelector } from "reselect"


const selectCategoryReducer = (state) => state.categories

export const selectCategoriesArr = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategories = (createSelector([selectCategoriesArr], (categories) => categories.reduce((accumulator, category) => {
    const { title, items, displayImg } = category
    accumulator[title.toLowerCase()] = { items, displayImg }
    return accumulator
}, {})))