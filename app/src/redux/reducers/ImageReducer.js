import {IMAGE} from '../actions/ActionTypes';

const initialState = {
  imgUri: '',
  imgPath: '',
};

export default function(state = initialState, action) {
  // debugger
  switch (action.type) {
    case IMAGE:
      console.log('imgreducer', action.payload);
      return {
        ...state,
        imgUri: action.payload.uri,
        imgPath: action.payload.data,
      };
    default:
      return state;
  }
}
