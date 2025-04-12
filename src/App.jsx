import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(0);
  const [prevDisplay, setPrevDisplay] = useState("");

  const pressNum = (number) => {
    if (prevDisplay.toString().includes("=")) {
      setPrevDisplay(number);
      setDisplay(number);
      return;
    }
    if (display == 0 && number == 0) {
      setDisplay(number);
      setPrevDisplay(0);
      return;
    }
    if (display == 0 && display.toString().includes(".") == false) {
      setDisplay(number);
      setPrevDisplay(number);
      return;
    }
    if (display == "+" || display == "-" || display == "*" || display == "/") {
      setDisplay(number);
      setPrevDisplay((prev) => prev.toString() + number);
      return;
    }
    if (prevDisplay.toString().includes(".")) {
      setDisplay((prev) => prev.toString() + number.toString());
      setPrevDisplay((prev) => prev.toString() + number.toString());
      return;
    }

    setDisplay((prev) => prev.toString() + number.toString());
    setPrevDisplay(display.toString() + number.toString());
  };

  const pressOperation = (operator) => {
    const lastInput = prevDisplay.toString().slice(-1);
    const last2Inputs = prevDisplay.toString().slice(-2);
    console.log(last2Inputs);

    if (prevDisplay.toString().includes("=")) {
      setPrevDisplay(display);
    }
    if (prevDisplay == "") {
      return;
    }
    if (last2Inputs == "+-" || last2Inputs == "*-" || last2Inputs == "/-") {
      setDisplay(operator);
      setPrevDisplay((prev) => {
        let cleaned = prev.substring(0, prev.length - 2);
        return cleaned + operator;
      });
      return;
    }

    if (
      (lastInput == "*" && operator == "-") ||
      (lastInput == "/" && operator == "-") ||
      (lastInput == "+" && operator == "-")
    ) {
      setDisplay(operator);
      setPrevDisplay((prev) => prev.toString() + operator);
      return;
    }
    if (
      lastInput == "+" ||
      lastInput == "-" ||
      lastInput == "*" ||
      lastInput == "/"
    ) {
      setDisplay(operator);
      setPrevDisplay((prev) => {
        let cleaned = prev.substring(0, prev.length - 1);
        return cleaned + operator;
      });
      return;
    }

    setDisplay(operator);
    setPrevDisplay((prev) => prev.toString() + operator);
  };
  const pressDecimal = () => {
    if (display.toString().includes(".")) {
      return;
    }
    setDisplay((prev) => prev.toString() + ".");
    setPrevDisplay((prev) => prev.toString() + ".");
  };
  const clear = () => {
    setDisplay(0);
    setPrevDisplay("");
  };
  const pressEval = () => {
    setDisplay(parseFloat(eval(prevDisplay.toString())));
    setPrevDisplay(
      (prev) => prev.toString() + "=" + parseFloat(eval(prev.toString()))
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
