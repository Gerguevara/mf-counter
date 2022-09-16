import React from "react";
import ReactDOM from "react-dom";
import  Navbar  from "./components/Navbar";

import "./index.css";

const App = () => (
  <>
    <Navbar />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
