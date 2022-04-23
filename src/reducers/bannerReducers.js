import {
	ALL_BANNERS_FAIL,
	ALL_BANNERS_SUCCESS,
	ALL_BANNERS_REQUEST,
} from "../actions/action.types";

export default (state = { banners: [] }, action) => {
	switch (action.type) {
		case ALL_BANNERS_REQUEST:
			return {
				loading: true,
				banners: [],
			};
		case ALL_BANNERS_SUCCESS:
			return {
				loading: false,
				banners: action.payload,
			};
		case ALL_BANNERS_FAIL:
			return {
				error: action.payload,
				banners: [],
			};

		default:
			return state;
	}
};
