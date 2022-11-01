import { ADD_NUM, SUB_NUM, INC_NUM, DEC_NUM, CHANGE_BANNERS, CHANGE_RECOMMENDS } from "./constants.js";

const initialState = {
  counter: 5,
  recommends: [],
  banners: [],
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
    case CHANGE_BANNERS: {
      return {
        ...state,
        banners: action.payload.banners
      }
    }
    case CHANGE_RECOMMENDS: {
      return {
        ...state, 
        recommends: action.payload.recommends
      }
    }
    default: {
      return state;
    }
  }
};
