import React from "react";
import { configureStore } from "@reduxjs/toolkit";

const initialValue = {
  value: 0,
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "counter/increment": {
      console.log('plus 1')
      return {
        ...state,
        value: state.value + 1,
      };
    }
    
    case "counter/decrement": {
      console.log('minus 1')
      return {
        ...state,
        value: state.value - 1,
      };
    }

    default:
      return state;
  }
};

const selectValue = (state) => state.value;
let count;
const render = () => {
  count = selectValue(store.getState());
};

const store = configureStore({ reducer });

store.subscribe(render);

render()

const Counter = () => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => store.dispatch({ type: "counter/increment" })}>
        +
      </button>
      <button onClick={() => store.dispatch({ type: "counter/decrement" })}>
        -
      </button>
    </div>
  );
};

export default Counter;
