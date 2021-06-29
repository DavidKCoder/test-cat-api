const defaultState = {
  categories: []
}

export const GET_CATEGORY = "GET_CATEGORY"

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {...state, categories: [...state.categories, action.payload]}
    default:
      return state
  }
}

export const getCategoriesAction = (payload) => ({type: GET_CATEGORY, payload})
