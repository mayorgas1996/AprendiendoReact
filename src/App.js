import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas'
import Header from './components/Header'
import Slider from './components/Slider'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">

      <Header/>
      
      <Slider/>

      <div className="center">
        <section id="content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola a todos.
        </p>

          <section className="componentes">
            <MiComponente/>
          </section>
        
        <Peliculas/>
        </section>

        <Sidebar/>

      </div>
    </div>
  );
}

export default App;
