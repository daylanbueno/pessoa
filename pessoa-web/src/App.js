import React, { Component } from 'react'
import RotasComponent from './componentes/Rotas/RotasComponent'
import Layout from './componentes/template/LayoutComponent'
import Menssages from './util/Menssages';
class App extends Component {
  render() {
    return (
    <div>
       <Layout titulo="Sistema de Gestão de Pessoa">
         <RotasComponent/>
       </Layout>
       <Menssages />
    </div>
    );
  }
}
export default App;
