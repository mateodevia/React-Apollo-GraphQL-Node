import React from "react";
import Libros from "./components/Libros/Libros";
import Autores from "./components/Autores/Autores";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Libros />
      <Autores />
    </div>
  );
}

export default App;
