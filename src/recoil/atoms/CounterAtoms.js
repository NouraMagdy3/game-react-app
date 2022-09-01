import { atom, selector } from "recoil";

export const counterState = atom({
  key: "counterState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const multipliedCounterSelector = selector({
  key: "multipliedCounterSelector",
  get: ({ get }) => {
    const mCounter = get(counterState);
    return mCounter * 10;
  },
});
