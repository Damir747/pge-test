/* eslint-disable indent */
import { mockHeader } from '../../mock/mock';
import { HEADER_INIT } from './action-types';

const initialState = {
	header: mockHeader
};

const headerReducer = (state = initialState, action) => {
	switch (action.type) {
		case HEADER_INIT: {
			return {
				...state,
				header: action.payload,
			};
		}
		default:
			return state;
	}
};

export default headerReducer;
