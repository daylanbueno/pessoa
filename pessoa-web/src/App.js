import React, { Component } from 'react'
import Menssages from './util/Menssages';
import Autenticado from './componentes/Rotas/Autenticado';
class App extends Component {
  render() {
    return (
    <div>
        <Autenticado/>
       <Menssages />
    </div>
    );
  }
}
export default App;
