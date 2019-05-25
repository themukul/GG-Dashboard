import { ACTION_CONSTANTS } from '../actions/actionConstants';

const defaultState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  data: null,
  error: null
};

export const fetchReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ACTION_CONSTANTS.SUCCESS_FETCHING_DATA:
      return {
        ...defaultState,
        isSuccess: true,
        data: action.payload
      };
    case ACTION_CONSTANTS.ERROR_FETCHING_DATA:
      return {
        ...defaultState,
        isError: true,
        error: action.error
      };
    case ACTION_CONSTANTS.FETCHING_DATA:
      return {
        ...defaultState,
        isLoading: true
      };
    default:
      return state;
  }
};
