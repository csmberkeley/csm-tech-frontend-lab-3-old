import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return <div>add stuff here</div>;
};

export default App;

const wrapper: HTMLElement | null = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
