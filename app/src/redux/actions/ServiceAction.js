import {SERVICES} from './ActionTypes';
const BaseURL = 'http://18.233.252.69/api/v1/categories';
export const getAllServices = () => dispatch => {
  fetch(`http://18.233.252.69/api/v1/services`)
    .then(response => response.json())
    .then(services =>
      dispatch({
        type: SERVICES,
        payload: services,
      }),
    )
    .catch(error => {
      console.log('ERROR', error);
    });
};
