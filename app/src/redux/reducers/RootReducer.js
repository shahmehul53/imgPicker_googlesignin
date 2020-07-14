//define combine reducer here
import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer';
import ServiceReducer from './ServiceReducer';
import GoogleReducer from './GoogleReducer';
import ImageReducer from './ImageReducer';

export default combineReducers({
  categories: CategoryReducer,
  services: ServiceReducer,
  login: GoogleReducer,
  imgdata: ImageReducer,
});
