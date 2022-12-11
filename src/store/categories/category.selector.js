import { createSelector } from "reselect"


const selectCategoryReducer = (state) => state.categories

export const selectCategoriesArr = createSelector(
    [selectCategoryReducer],
    (categoriesReducer) => categoriesReducer.categories
)

export const selectCategories = (
    createSelector(
        [selectCategoriesArr],
        (categories) => {
            return categories.reduce((accumulator, category) => {
                const { title, items, displayImg } = category
                accumulator[title.toLowerCase()] = { items, displayImg }
                return accumulator
            }, {})
        }
    )
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesReducer) => categoriesReducer.isLoading
)