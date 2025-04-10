import { useState } from "react";
import CalcButton from "./CalcButton";
import "./App.css";

function App() {
  return (
    <>
      <div id="container-wrapper">
        <h1 id="title">Calculator-Inator</h1>
        <h1 id="display">Display</h1>
        <div id="buttons-wrapper">
          <div id="row-1">
            <button id="one">1</button>
            <button id="two">2</button>
            <button id="three">3</button>
            <button id="add">+</button>
          </div>
          <div id="row-2">
            <button id="four">4</button>
            <button id="five">5</button>
            <button id="six">6</button>
            <button id="subtract">-</button>
          </div>
          <div id="row-3">
            <button id="seven">7</button>
            <button id="eight">8</button>
            <button id="nine">9</button>
            <button id="multiply">*</button>
          </div>
          <div id="row-4">
            <button id="decimal">.</button>
            <button id="clear">CE</button>
            <button id="divide">/</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
