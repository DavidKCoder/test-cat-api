import {getCatsAction, moreCatsAction} from "./catsReducer";
import {getCategoriesAction} from "./categoriesReducer";

export const fetchCats = (categoryID) => {
  return function(dispatch) {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoryID}`)
      .then(response => response.json())
      .then(json => dispatch(getCatsAction(json)))
  }
}

export const fetchMoreCats = (categoryID) => {
  return function(dispatch) {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoryID}`)
      .then(response => response.json())
      .then(json => dispatch(moreCatsAction(json)))
  }
}

export const fetchCategories = () => {
  return function(dispatch) {
    fetch("https://api.thecatapi.com/v1/categories ")
      .then(response => response.json())
      .then(json => dispatch(getCategoriesAction(json)))
  }
}