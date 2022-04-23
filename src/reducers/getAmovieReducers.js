import {
	GET_A_MOVIE_FAIL,
	GET_A_MOVIE_REQUEST,
	GET_A_MOVIE_SUCCESS,
} from "../actions/action.types";

export default (state = { movie: "" }, action) => {
	switch (action.type) {
		case GET_A_MOVIE_REQUEST:
			return {
				loading: true,
				movie: "",
			};
		case GET_A_MOVIE_SUCCESS:
			return {
				loading: false,
				movie: action.payload,
			};
		case GET_A_MOVIE_FAIL:
			return {
				error: action.payload,
				movie: "",
			};

		default:
			return state;
	}
};
