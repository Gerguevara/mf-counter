import React from "react";
import ReactDOM from "react-dom";
//navbar es el nombre del microfrontend y /Navbar es el nombre con el que esta expuesto des el otro proyecto
import Navbar from "navbar/Navbar";
import CounterReact from "counterReact/CounterReact";


import "./index.css";

const App = () => (
  <>
    <Navbar></Navbar>
    <h1>hiii</h1>
    <CounterReact />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
