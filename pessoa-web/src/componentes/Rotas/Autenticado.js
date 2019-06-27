import React, { Component } from 'react'
import Login from '../Login';
import RotasComponent from './RotasComponent';
import Layout from '../template/LayoutComponent'

export default class Autenticado extends Component {

    renderRotas() {
        return(
            <Layout titulo ="Siste de Gestão de Pessoa">
                    <RotasComponent/>
            </Layout>
        )
    }

    renderLogin() {
        return(
            <Login/>
        )
    }

    render() {
        const isAutenticado  = localStorage.getItem('isAutenticado')
        console.log(isAutenticado)
        return (
         <div>
             {isAutenticado? this.renderRotas() : this.renderLogin()}
         </div>
        )
    }
} 