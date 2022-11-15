import logo from './logo.svg';
import './Estilos/App.css';
import * as React from 'react';

import Navegacion from './componentes/Navegacion';
import Servicios from './componentes/Servicios';
import CarouselBanner from './componentes/CarouselBanner';



function App(){
  return(
    <div className="App">
      <Navegacion/>
      <CarouselBanner/>
      <Servicios/>
    </div>
  )
}


export default App;
