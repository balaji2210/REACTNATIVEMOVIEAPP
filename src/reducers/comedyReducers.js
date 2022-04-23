import {
	ALL_COMEDY_FAIL,
	ALL_COMEDY_REQUSET,
	ALL_COMEDY_SUCCESS,
} from "../actions/action.types";

export default (state = { movies: [] }, action) => {
	switch (action.type) {
		case ALL_COMEDY_REQUSET:
			return {
				movies: [],
				loading: true,
			};
		case ALL_COMEDY_SUCCESS:
			return {
				loading: false,
				movies: action.payload,
			};
		case ALL_COMEDY_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
