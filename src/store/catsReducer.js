const defaultState = {
  cats: [],
}

export const GET_CATS = "GET_CATS"
export const MORE_CAT = "MORE_CATS"

export const catsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATS:
      return {...state, cats: action.payload}
    case MORE_CAT:
      return {...state, cats: [...state.cats.concat(...action.payload)]}
    default:
      return state
  }
}

export const getCatsAction = (payload) => ({type: GET_CATS, payload});
export const moreCatsAction = (payload) => ({type: MORE_CAT, payload});