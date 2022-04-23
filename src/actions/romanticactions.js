import {
	ALL_ROMANTIC_FAIL,
	ALL_ROMANTIC_REQUEST,
	ALL_ROMANTIC_SUCCESS,
} from "./action.types";

export const getRomanticMovies = () => async (dispatch) => {
	try {
		dispatch({
			type: ALL_ROMANTIC_REQUEST,
		});
		const res = await fetch(
			`https://mflix2210.herokuapp.com/api/v1/movie?category=romantic`
		);

		const data = await res.json();

		dispatch({
			type: ALL_ROMANTIC_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ALL_ROMANTIC_FAIL,
			payload: error,
		});
	}
};
