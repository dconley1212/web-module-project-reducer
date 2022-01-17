import React, { useReducer } from "react";
import reducer, { initialState } from "../reducers";
import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";
import { addOne, applyNumber, changeOperation, clearDisplay } from "../actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberChange = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperatorChange = (operator) => {
    dispatch(changeOperation(operator));
  };

  const handleClearChange = () => {
    dispatch(clearDisplay());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberChange(1)} />
              <CalcButton value={2} onClick={() => handleNumberChange(2)} />
              <CalcButton value={3} onClick={() => handleNumberChange(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberChange(4)} />
              <CalcButton value={5} onClick={() => handleNumberChange(5)} />
              <CalcButton value={6} onClick={() => handleNumberChange(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberChange(7)} />
              <CalcButton value={8} onClick={() => handleNumberChange(8)} />
              <CalcButton value={9} onClick={() => handleNumberChange(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => handleOperatorChange("+")}
              />
              <CalcButton
                value={"*"}
                onClick={() => handleOperatorChange("*")}
              />
              <CalcButton
                value={"-"}
                onClick={() => handleOperatorChange("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClearChange()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
