export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_OF_TOTAL = "MEMORY_OF_TOTAL";
export const MEMORY_AND_TOTAL = "MEMORY_AND_TOTAL";
export const MEMORY_RESET = "MEMORY_RESET";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const memoryOfTotal = () => {
  return { type: MEMORY_OF_TOTAL };
};

export const memoryAndTotal = () => {
  return { type: MEMORY_AND_TOTAL };
};

export const memoryReset = () => {
  return { type: MEMORY_RESET };
};
