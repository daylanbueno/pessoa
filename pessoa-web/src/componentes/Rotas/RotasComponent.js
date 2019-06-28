import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../HomeComponent'
import CadastroPessoa from '../../CadastroPessoa';
import ConsultaPessoa from '../../ConsultaPessoa';
import CadastroUsuario from '../UsuarioCadastro';

export default class RotasComponent extends Component {
    render() {
        return (
            <Switch>
                <Route path={'/home'} component={Home}/>
                <Route path={'/pessoa-cadastro'} component={CadastroPessoa}/>
                <Route path={'/pessoa-consulta'} component={ConsultaPessoa}/>
                <Route path={'/usuario-cadastro'} component={CadastroUsuario}/>
            </Switch>
        )
    }
} 