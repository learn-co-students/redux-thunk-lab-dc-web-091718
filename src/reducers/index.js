import { combineReducers } from 'redux';
import catReducer from './cats_reducer';

const rootReducer = combineReducers({catReducer});

export default rootReducer;