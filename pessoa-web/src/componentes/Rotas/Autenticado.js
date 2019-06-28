import React, { Component } from 'react'
import Login from '../Login';
import RotasComponent from './RotasComponent';
import Layout from '../template/LayoutComponent'

import { connect } from 'react-redux'

export class Autenticado extends Component {

    renderRotas() {
        return(
            <Layout titulo ="Sistema de Gestão de Pessoa">
                    <RotasComponent />
            </Layout>
        )
    }
    renderLogin() {
        return(
            <Login/>
        )
    }
    render() {
     const { usuario } = this.props
        const isAutenticado  = usuario.isAutenticado
        return (
         <div>
             {isAutenticado? this.renderRotas() : this.renderLogin()}
         </div>
        )
    }
} 

const mapStateToProps = state => ({
    usuario: state.usuario,
})
export default connect(mapStateToProps, null)(Autenticado)  