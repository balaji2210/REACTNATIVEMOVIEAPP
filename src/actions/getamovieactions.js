import {
	GET_A_MOVIE_FAIL,
	GET_A_MOVIE_REQUEST,
	GET_A_MOVIE_SUCCESS,
} from "./action.types";

export const getAMovie = (id) => async (dispatch) => {
	try {
		dispatch({
			type: GET_A_MOVIE_REQUEST,
		});
		const res = await fetch(
			`https://mflix2210.herokuapp.com/api/v1/movie/${id}`
		);

		const data = await res.json();

		dispatch({
			type: GET_A_MOVIE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_A_MOVIE_FAIL,
			payload: error,
		});
	}
};
