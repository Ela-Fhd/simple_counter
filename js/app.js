import { incAction, decAction, resetAction } from "../Redux/Counter/actions.js";
import store from "../Redux/store.js";

const decBtn = document.querySelector(".dec");
const incBtn = document.querySelector(".inc");
const resetBtn = document.querySelector(".reset");
export const counter = document.querySelector(".counterValue");

incBtn.addEventListener("click", () => {
  store.dispatch(incAction(1));
  const newVal = store.getState();
  counter.innerHTML = newVal.number;
});

resetBtn.addEventListener("click", () => {
  store.dispatch(resetAction());
  const newVal = store.getState();
  counter.innerHTML = newVal.number;
});

decBtn.addEventListener("click", () => {
  store.dispatch(decAction(1));
  const newVal = store.getState();
  counter.innerHTML = newVal.number;
});
