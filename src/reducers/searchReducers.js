import {
	SEARCH_MOVIE_FAIL,
	SEARCH_MOVIE_SUCCESS,
	SEARCH_MOVIE_REQUEST,
} from "../actions/action.types";

export default (state = { search: "" }, action) => {
	switch (action.type) {
		case SEARCH_MOVIE_REQUEST:
			return {
				loading: true,
				search: "",
			};
		case SEARCH_MOVIE_SUCCESS:
			return {
				loading: false,
				search: action.payload,
			};
		case SEARCH_MOVIE_FAIL:
			return {
				search: "",
				error: action.payload,
			};

		default:
			return state;
	}
};
