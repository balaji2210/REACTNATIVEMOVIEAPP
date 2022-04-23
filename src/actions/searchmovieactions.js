import {
	SEARCH_MOVIE_FAIL,
	SEARCH_MOVIE_SUCCESS,
	SEARCH_MOVIE_REQUEST,
} from "./action.types";

export const searchMovie = (search) => async (dispatch) => {
	try {
		dispatch({
			type: SEARCH_MOVIE_REQUEST,
		});
		const res = await fetch(
			`https://mflix2210.herokuapp.com/api/v1/movies?search=${search}`
		);
		const data = await res.json();

		dispatch({
			type: SEARCH_MOVIE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: SEARCH_MOVIE_FAIL,
			payload: error,
		});
	}
};
