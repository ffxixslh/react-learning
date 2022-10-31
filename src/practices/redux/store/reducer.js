import { ADD_NUM, SUB_NUM, INC_NUM, DEC_NUM } from "./constants";

const initialState = {
  counter: 5,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUM: {
      return {
        ...state,
        counter: state.counter + action.payload.num,
      };
    }
    case SUB_NUM: {
      return {
        ...state,
        counter: state.counter - action.payload.num,
      };
    }
    case INC_NUM: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case DEC_NUM: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default: {
      return state;
    }
  }
};
