import { useReducer } from "react";
import "./App.css";

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  DELETE_DIGIT: "delete-digit",
  CHOOSE_OPERATION: "choose-operation",
  EVALUATE: "evaluate",
  CLEAR: "clear",
};

function reducer(state, { type, payload }) {}

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
          <button className="span-2"> AC </button>
          <button> DEL </button>
          <button> ÷ </button>
          <button> 1 </button>
          <button> 2 </button>
          <button> 3 </button>
          <button> * </button>
          <button> 4 </button>
          <button> 5 </button>
          <button> 6 </button>
          <button> + </button>
          <button> 7 </button>
          <button> 8 </button>
          <button> 9 </button>
          <button> - </button>
          <button> . </button>
          <button> 0 </button>
          <button className="span-2"> = </button>
        </div>
      </div>
    </>
  );
}
