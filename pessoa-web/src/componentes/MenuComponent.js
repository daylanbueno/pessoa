import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from '@material-ui/core'
export class MenuComponent extends Component {
    render() {
        return (
            <div>
                <MenuItem to={'/home'} component={Link}>Home</MenuItem>
                <MenuItem to={'/pessoa-cadastro'}  component={Link} >Cadastro</MenuItem>
                <MenuItem to={'/pessoa-consulta'}  component={Link} >Consulta</MenuItem>
                <MenuItem to={'/usuario-cadastro'}   component={Link} > Usuário</MenuItem>
            </div>
        )
    }
} 

export default (MenuComponent)