import {
	ALL_ACTION_FAIL,
	ALL_ACTION_REQUSET,
	ALL_ACTION_SUCCESS,
} from "../actions/action.types";

export default (state = { movies: [] }, action) => {
	switch (action.type) {
		case ALL_ACTION_REQUSET:
			return {
				loading: true,
				movies: [],
			};
		case ALL_ACTION_SUCCESS:
			return {
				loading: false,
				movies: action.payload,
			};
		case ALL_ACTION_FAIL:
			return {
				error: action.payload,
			};

		default:
			return state;
	}
};
