import { createStore } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

let currentValue = store.getState();

const listener = () => {
  const previousValue = currentValue;
  currentValue = store.getState();
  console.log("pre state: ", previousValue, "next state: ", currentValue);
};

store.subscribe(listener);

const runCounter = () => {
  store.dispatch({ type: "INCREMENT" });
  store.dispatch({ type: "INCREMENT" });
  store.dispatch({ type: "DECREMENT" });
};

export default runCounter;
