import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas'
import Header from './components/header'

function App() {
  return (
    <div className="App">

      <Header/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola a todos.
        </p>

          <section className="componentes">
            <MiComponente/>
          </section>
        
        <Peliculas/>

      </header>
    </div>
  );
}

export default App;
