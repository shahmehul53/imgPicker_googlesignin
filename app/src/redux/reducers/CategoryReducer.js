import {CATEGORIES} from '../actions/ActionTypes';

const initialState = {
  categoriesList: [],
};

export default function(state = initialState, action) {
  // debugger
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        categoriesList: action.payload,
      };
    default:
      return state;
  }
}
