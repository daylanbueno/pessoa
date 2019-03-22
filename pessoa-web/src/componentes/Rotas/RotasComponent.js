import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../HomeComponent'
import CadastroPessoa from '../../CadastroPessoa';

export default class RotasComponent extends Component {
    render() {
        return (
            <Switch>
                <Route path={'/home'} component={Home}/>
                <Route path={'/cadastro'} component={CadastroPessoa}/>
            </Switch>
        )
    }
} 