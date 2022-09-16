import React from "react";
import ReactDOM from "react-dom";
//navbar es el nombre del microfrontend y /Navbar es el nombre con el que esta expuesto des el otro proyecto
import Navbar from "navbar/Navbar";
// nombre dado localmente en weppackConfig / nombre dado en el mf Remoto
import CounterReact from "counterReact/CounterReact";



// cuidado con el nombrado de clases ya que la encapsulacion de clases no aplica ya que los estilos de cada
// microfrontent van siendo cargados dynamicamente en el indexedDB, por lo tanto afectan a elementos
// que tengan el mismo nombre de alguna otra clase en otro microfrontent

import "./index.css";

const App = () => (
  <>
    <Navbar></Navbar>
    <h1>hiii</h1>
    <CounterReact />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
