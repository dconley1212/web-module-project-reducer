import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_OF_TOTAL,
  MEMORY_AND_TOTAL,
  MEMORY_RESET,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
  }
};

const calculateMemoryAndTotal = (num1, num2) => {
  return num1 + num2;
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };

    case MEMORY_OF_TOTAL:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_AND_TOTAL:
      return {
        ...state,
        total: calculateMemoryAndTotal(state.total, state.memory),
      };

    case MEMORY_RESET:
      return {
        ...state,
        memory: 0,
      };

    default:
      return state;
  }
};

export default reducer;
