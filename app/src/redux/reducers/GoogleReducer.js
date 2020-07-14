import {GOOGLE} from '../actions/ActionTypes';

const initialState = {
  userinfo: {},
};

export default function(state = initialState, action) {
  // debugger
  switch (action.type) {
    case GOOGLE:
      console.log('object', action.payload);
      return {
        ...state,
        userinfo: action.payload.user,
      };
    default:
      return state;
  }
}
