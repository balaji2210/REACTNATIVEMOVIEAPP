import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import bannerReducers from "./src/reducers/bannerReducers";
import actionReducers from "./src/reducers/actionreducers";
import comedyReducers from "./src/reducers/comedyReducers";

import thrillerReducers from "./src/reducers/thrillerReducer";

import romanticReducers from "./src/reducers/romanticReducers";

import getAMovieReducers from "./src/reducers/getAmovieReducers";

import searchReducers from "./src/reducers/searchReducers";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
	bannerReducers,
	actionReducers,
	comedyReducers,
	thrillerReducers,
	romanticReducers,
	getAMovieReducers,
	searchReducers,
});

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
