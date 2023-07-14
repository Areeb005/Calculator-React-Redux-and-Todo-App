import { combineReducers } from "redux";
import AddDigit from './AddDigit';
// import Actions from '../actions/Actions'

const reducers = combineReducers({
    myReducer: AddDigit
})

export default reducers;

