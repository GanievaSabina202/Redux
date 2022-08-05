import AllTypes from "../types";

const counterPlus = (val) => {
  return { type: AllTypes.counter.COUNTER_PLUS, payload: val };
};

const counterAllActions = {
  counterPlus,
};
export default counterAllActions;
