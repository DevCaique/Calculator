import "./App.css";

export function App() {
  return (
    <>
      {/* Te amo amor */}
      <div className="calculator">
        <div className="output">
          <div className="previous-operand">123,123</div>
          <div className="current-operand">321,321</div>
        </div>
        <div className="calculator-btn-area">
          <button className="span-2"> AC </button>
          <button> DEL </button>
          <button> ÷ </button>
          <button> 7 </button>
          <button> 8 </button>
          <button> 9 </button>
          <button> * </button>
          <button> 6 </button>
          <button> 5 </button>
          <button> 4 </button>
          <button> + </button>
          <button> 3 </button>
          <button> 2 </button>
          <button> 1 </button>
          <button> - </button>
          <button> . </button>
          <button> 0 </button>
          <button className="span-2"> = </button>
        </div>
      </div>
    </>
  );
}
