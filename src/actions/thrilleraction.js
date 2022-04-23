import {
	ALL_THRILLER_FAIL,
	ALL_THRILLER_SUCCESS,
	ALL_THRILLER_REQUSET,
} from "./action.types";

export const getThriller = () => async (dispatch) => {
	try {
		dispatch({ type: ALL_THRILLER_REQUSET });
		const res = await fetch(
			`https://mflix2210.herokuapp.com/api/v1/movie?category=thriller`
		);

		const data = await res.json();

		dispatch({
			type: ALL_THRILLER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ALL_THRILLER_FAIL,
			payload: error,
		});
	}
};
