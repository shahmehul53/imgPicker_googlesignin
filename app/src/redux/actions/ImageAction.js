import {IMAGE} from './ActionTypes';

export const imgPicker = data => {
  console.log('action idhar hai', data);
  return {
    type: IMAGE,
    payload: data,
  };
};
