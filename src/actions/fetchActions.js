import Axios from 'axios';
import { ACTION_CONSTANTS } from './actionConstants';

export const fetchDataSuccess = payload => ({
  type: ACTION_CONSTANTS.SUCCESS_FETCHING_DATA,
  payload
});

export const fetchDataError = error => ({
  type: ACTION_CONSTANTS.ERROR_FETCHING_DATA,
  error
});

export const fetchingData = () => ({
  type: ACTION_CONSTANTS.FETCHING_DATA
});

export const fetchDataAction = () => {
  return dispatch => {
    dispatch(fetchingData());
    return Axios({
      method: 'GET',
      url: 'http://www.mocky.io/v2/5cd04a20320000442200fc10'
    })
      .then(response => {
        if (!response) {
          dispatch(fetchDataError('No data found!'));
        } else {
          const { data } = response;
          dispatch(fetchDataSuccess(data));
        }
      })
      .catch(error => {
        dispatch(fetchDataError('Error in API'));
      });
  };
};
