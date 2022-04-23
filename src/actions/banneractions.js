import {
	ALL_BANNERS_FAIL,
	ALL_BANNERS_REQUEST,
	ALL_BANNERS_SUCCESS,
} from "../actions/action.types";

export const getBanners = () => async (dispatch) => {
	try {
		dispatch({
			type: ALL_BANNERS_REQUEST,
		});
		const res = await fetch(
			`https://mflix2210.herokuapp.com/api/v1/banners/trending`
		);

		const data = await res.json();

		dispatch({
			type: ALL_BANNERS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ALL_BANNERS_FAIL,
			payload: error,
		});
	}
};
