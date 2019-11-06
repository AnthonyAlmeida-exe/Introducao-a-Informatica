import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Trabalho de Introdução a Informática
        </h1>
        <ul>
          <li>Anthony Almeida</li>
          <li>Renan Carequinha</li>
          <li>Raúl</li>
          <li>Rodrigo</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kalec God
        </a>
      </header>
    </div>
  );
}

export default App;
