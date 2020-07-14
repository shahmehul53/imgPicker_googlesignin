import {CATEGORIES} from './ActionTypes';
const BaseURL = 'http://18.233.252.69/api/v1/categories';
export const getAllCategories = () => dispatch => {
  fetch(`http://18.233.252.69/api/v1/categories`)
    .then(response => response.json())
    .then(category =>
      dispatch({
        type: CATEGORIES,
        payload: category,
      }),
    )
    .catch(error => {
      console.log('ERROR', error);
    });
};
