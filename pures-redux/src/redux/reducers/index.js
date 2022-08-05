import { combineReducers } from "redux";
import  CounterReducer  from "./CounterReducers";
const reducers = combineReducers({
  CounterReducer,
});

export default reducers;
