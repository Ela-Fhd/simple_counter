import { DECREMENT, INCREMENT, RESET } from "./actionTypes.js";

// counter actions
export const incAction = (count) => {
  return { type: INCREMENT, payload: count };
};

export const decAction = (count) => {
  return { type: DECREMENT, payload: count };
};

export const resetAction = () => {
  return { type: RESET };
};
