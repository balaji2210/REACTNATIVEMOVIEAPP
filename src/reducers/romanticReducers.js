import {
	ALL_ROMANTIC_FAIL,
	ALL_ROMANTIC_SUCCESS,
	ALL_ROMANTIC_REQUEST,
} from "../actions/action.types";

export default (state = { movies: [] }, action) => {
	switch (action.type) {
		case ALL_ROMANTIC_REQUEST:
			return {
				movies: [],
				loading: true,
			};
		case ALL_ROMANTIC_SUCCESS:
			return {
				loading: false,
				movies: action.payload,
			};
		case ALL_ROMANTIC_FAIL:
			return {
				error: action.payload,
			};

		default:
			return state;
	}
};
