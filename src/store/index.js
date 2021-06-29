import {applyMiddleware, combineReducers, createStore} from "redux";
import {catsReducer} from "./catsReducer";
import {categoriesReducer} from "./categoriesReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    catsReducer,
    categoriesReducer,
  }
);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))