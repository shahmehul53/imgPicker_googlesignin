import {GOOGLE} from './ActionTypes';

export const googleLogin = data => {
  console.log('action idhar hai', data);
  return {
    type: GOOGLE,
    payload: data,
  };
};
