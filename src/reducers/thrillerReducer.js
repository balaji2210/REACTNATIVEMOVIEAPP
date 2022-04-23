import {
	ALL_THRILLER_FAIL,
	ALL_THRILLER_SUCCESS,
	ALL_THRILLER_REQUSET,
} from "../actions/action.types";

export default (state = { movies: [] }, action) => {
	switch (action.type) {
		case ALL_THRILLER_REQUSET:
			return {
				loading: true,
				movies: [],
			};
		case ALL_THRILLER_SUCCESS:
			return {
				loading: false,
				movies: action.payload,
			};
		case ALL_THRILLER_FAIL:
			return {
				error: action.payload,
			};

		default:
			return state;
	}
};
