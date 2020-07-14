import {SERVICES} from '../actions/ActionTypes';

const initialState = {
  servicesList: [],
};

export default function(state = initialState, action) {
  // debugger
  switch (action.type) {
    case SERVICES:
      return {
        ...state,
        servicesList: action.payload,
      };
    default:
      return state;
  }
}
