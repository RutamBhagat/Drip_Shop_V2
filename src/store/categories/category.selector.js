export const selectCategories = (state) => {
    return (
        state.categories.categories.reduce((accumulator, category) => {
            const { title, items, displayImg } = category
            accumulator[title.toLowerCase()] = { items, displayImg }
            return accumulator
        }, {})
    )
}