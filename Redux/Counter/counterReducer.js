import { INCREMENT, DECREMENT, RESET } from "./actionTypes.js";

const inital_state = {
  number: 0,
};

// counter reducer
const counterReducer = (state = inital_state, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + payload,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - payload,
      };
    case RESET:
      return { ...state, number: 0 };
    default: {
      return state;
    }
  }
};

export default counterReducer;
