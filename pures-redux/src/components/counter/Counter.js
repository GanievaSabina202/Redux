import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AllActions from "../../redux/actions";

const Counter = () => {
  const counter = useSelector((state) => state.CounterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => dispatch(AllActions.counterAllActions.counterPlus(1))}
      >
        +
      </button>

    </div>
  );
};

export default Counter;
