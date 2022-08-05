import AllTypes from "../types";

const initialState = 0;
const CounterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case AllTypes.counter.COUNTER_PLUS:
      return state + 1;

    default:
      return state;
  }
};

export default CounterReducer;
