import {
	ALL_ACTION_FAIL,
	ALL_ACTION_REQUSET,
	ALL_ACTION_SUCCESS,
} from "./action.types";

export const getActionMovies = () => async (dispatch) => {
	try {
		dispatch({ type: ALL_ACTION_REQUSET });
		const res = await fetch(
			`https://mflix2210.herokuapp.com/api/v1/movie?category=action`
		);
		const data = await res.json();
		dispatch({
			type: ALL_ACTION_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({ type: ALL_ACTION_FAIL, paload: error });
	}
};
