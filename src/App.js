import React from "react";
import logo from "./logo.svg";
import { Header, Main } from "./styles.js";

import Anthony from "./components/Anthony";
import Renan from "./components/Renan";
import Raul from "./components/Raul";

function App() {
  return (
    <Main>
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Trabalho de Introdução a Informática</h1>
        <ul>
          <h2>Alunos:</h2>
          <li>Anthony Almeida</li>
          <li>Raúl Tomaz </li>
          <li>Renan Cavalcante</li>
          <li>Rodrigo Conegundes</li>
        </ul>
      </Header>
      <Anthony />
      <Renan />
      <Raul />
    </Main>
  );
}

export default App;
