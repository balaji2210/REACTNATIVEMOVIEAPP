import {
	ALL_COMEDY_FAIL,
	ALL_COMEDY_REQUSET,
	ALL_COMEDY_SUCCESS,
} from "./action.types";

export const getComedyMovies = () => async (dispatch) => {
	try {
		dispatch({
			type: ALL_COMEDY_REQUSET,
		});

		const res = await fetch(
			`https://mflix2210.herokuapp.com/api/v1/movie?category=comedy`
		);
		const data = await res.json();
		dispatch({
			type: ALL_COMEDY_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ALL_COMEDY_FAIL,
			payload: error,
		});
	}
};
