import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div id="calc-wrapper">
        <h1 id="title">Calculator-Inator</h1>
        <div id="display-wrapper">
          <h2 id="display-prev">Prev Value</h2>
          <h2 id="display">Value</h2>
        </div>
        <div id="buttons-wrapper">
          <table id="buttons-table">
            <tr id="row-1">
              <td>
                <button className="clear-button" id="clear">
                  C
                </button>
              </td>
              <td>
                <button className="operation-button" id="divide">
                  /
                </button>
              </td>
              <td>
                <button className="operation-button" id="multiply">
                  *
                </button>
              </td>
              <td>
                <button className="operation-button" id="subtract">
                  -
                </button>
              </td>
            </tr>
            <tr id="row-2">
              <td>
                <button className="number-button" id="seven">
                  7
                </button>
              </td>
              <td>
                <button className="number-button" id="eight">
                  8
                </button>
              </td>
              <td>
                <button className="number-button" id="nine">
                  9
                </button>
              </td>
              <td rowSpan={2}>
                <button className="operation-button" id="add">
                  +
                </button>
              </td>
            </tr>
            <tr id="row-3">
              <td>
                <button className="number-button" id="four">
                  4
                </button>
              </td>
              <td>
                <button className="number-button" id="five">
                  5
                </button>
              </td>
              <td>
                <button className="number-button" id="six">
                  6
                </button>
              </td>
            </tr>
            <tr id="row-3">
              <td>
                <button className="number-button" id="one">
                  1
                </button>
              </td>
              <td>
                <button className="number-button" id="two">
                  2
                </button>
              </td>
              <td>
                <button className="number-button" id="three">
                  3
                </button>
              </td>
              <td rowSpan={2}>
                <button className="operation-button" id="equals">
                  =
                </button>
              </td>
            </tr>
            <tr id="row-5">
              <td colSpan={2}>
                <button className="number-button" id="zero">
                  0
                </button>
              </td>
              <td>
                <button className="number-button" id="decimal">
                  .
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
