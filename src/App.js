import React from 'react';
import './assets/css/App.css';

//Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';

function App() {

  var buttonString = "Ir al blog";

  return (
    <div className="App">

      <Header/>
      
      <Slider
        title = "Bienvenido a la web de AprendiendoDjango con Javier Mayorgas"
        btn={buttonString}
      />

      <div className="center">

        <SeccionPruebas/>
        <Sidebar/>
        <div class="clearfix"></div>

      </div>

      <Footer/>

    </div>
  );
}

export default App;
