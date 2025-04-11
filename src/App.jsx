import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(0);
  const [prevDisplay, setPrevDisplay] = useState("");

  const pressNum = (number) => {
    console.log(number);
    if (display == "0") {
      setDisplay(number);
      return;
    }
    if (prevDisplay.toString().search("=") != -1) {
      setPrevDisplay("");
      setDisplay(number);
      return;
    }
    if (
      display == "+" ||
      display == "*" ||
      display == "/" ||
      (display == "-" && number != 0)
    ) {
      setDisplay(number);
      return;
    }
    setDisplay((prev) => prev.toString() + number.toString());
  };

  const pressOperation = (operator) => {
    console.log(operator);
    if (prevDisplay.toString().search("=") != -1) {
      setPrevDisplay(display.toString() + operator);
      setDisplay(operator);
      return;
    }
    setPrevDisplay((prev) => prev + display.toString() + operator);
    setDisplay(operator);
  };

  const clear = () => {
    setDisplay(0);
    setPrevDisplay("");
  };
  const pressEval = () => {
    console.log("=");
    setDisplay((prev) => eval(prevDisplay.toString() + prev.toString()));
    setPrevDisplay(
      (prev) =>
        prev.toString() +
        display.toString() +
        "=" +
        eval(prev.toString() + display.toString())
    );
  };
  return (
    <>
      <div id="calc-wrapper">
        <h1 id="title">Calculator-Inator</h1>
        <div id="display-wrapper">
          <h2 id="display-prev">{prevDisplay}</h2>
          <h2 id="display">{display}</h2>
        </div>
        <div id="buttons-wrapper">
          <table id="buttons-table">
            <tbody>
              <tr id="row-1">
                <td>
                  <button
                    className="clear-button"
                    id="clear"
                    onClick={() => clear()}
                  >
                    C
                  </button>
                </td>
                <td>
                  <button
                    className="operation-button"
                    id="divide"
                    onClick={() => pressOperation("/")}
                  >
                    /
                  </button>
                </td>
                <td>
                  <button
                    className="operation-button"
                    id="multiply"
                    onClick={() => pressOperation("*")}
                  >
                    *
                  </button>
                </td>
                <td>
                  <button
                    className="operation-button"
                    id="subtract"
                    onClick={() => pressOperation("-")}
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr id="row-2">
                <td>
                  <button
                    className="number-button"
                    onClick={() => pressNum(7)}
                    id="seven"
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    className="number-button"
                    id="eight"
                    onClick={() => pressNum(8)}
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    className="number-button"
                    id="nine"
                    onClick={() => pressNum(9)}
                  >
                    9
                  </button>
                </td>
                <td rowSpan={2}>
                  <button
                    className="operation-button"
                    id="add"
                    onClick={() => pressOperation("+")}
                  >
                    +
                  </button>
                </td>
              </tr>
              <tr id="row-3">
                <td>
                  <button
                    className="number-button"
                    id="four"
                    onClick={() => pressNum(4)}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    className="number-button"
                    id="five"
                    onClick={() => pressNum(5)}
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    className="number-button"
                    id="six"
                    onClick={() => pressNum(6)}
                  >
                    6
                  </button>
                </td>
              </tr>
              <tr id="row-3">
                <td>
                  <button
                    className="number-button"
                    id="one"
                    onClick={() => pressNum(1)}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    className="number-button"
                    id="two"
                    onClick={() => pressNum(2)}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    className="number-button"
                    id="three"
                    onClick={() => pressNum(3)}
                  >
                    3
                  </button>
                </td>
                <td rowSpan={2}>
                  <button
                    className="operation-button"
                    id="equals"
                    onClick={() => pressEval()}
                  >
                    =
                  </button>
                </td>
              </tr>
              <tr id="row-5">
                <td colSpan={2}>
                  <button
                    className="number-button"
                    id="zero"
                    onClick={() => pressNum(0)}
                  >
                    0
                  </button>
                </td>
                <td>
                  <button
                    className="number-button"
                    id="decimal"
                    onClick={() => pressDecimal(".")}
                  >
                    .
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
