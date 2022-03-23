import { useReducer } from "react";
import { DigitBtn } from "./DigitBtn";
import { OperationBtn } from "./OperationBtn";
import "./App.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  DELETE_DIGIT: "delete-digit",
  CHOOSE_OPERATION: "choose-operation",
  EVALUATE: "evaluate",
  CLEAR: "clear",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CLEAR:
      return {};
  }
}

export function App() {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <>
      {/* Te amo amor */}
      <div className="calculator">
        <div className="output">
          <div className="previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <div className="calculator-btn-area">
          <button
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
            className="span-2"
          >
            {" "}
            AC{" "}
          </button>
          <button> DEL </button>
          <OperationBtn operation="÷" dispatch={dispatch} />
          <DigitBtn digit="1" dispatch={dispatch} />
          <DigitBtn digit="2" dispatch={dispatch} />
          <DigitBtn digit="3" dispatch={dispatch} />
          <OperationBtn operation="*" dispatch={dispatch} />
          <DigitBtn digit="4" dispatch={dispatch} />
          <DigitBtn digit="5" dispatch={dispatch} />
          <DigitBtn digit="6" dispatch={dispatch} />
          <OperationBtn operation="+" dispatch={dispatch} />
          <DigitBtn digit="7" dispatch={dispatch} />
          <DigitBtn digit="8" dispatch={dispatch} />
          <DigitBtn digit="9" dispatch={dispatch} />
          <OperationBtn operation="-" dispatch={dispatch} />
          <DigitBtn digit="." dispatch={dispatch} />
          <DigitBtn digit="0" dispatch={dispatch} />
          <button className="span-2"> = </button>
        </div>
      </div>
    </>
  );
}
