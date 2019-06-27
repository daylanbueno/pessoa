import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from '@material-ui/core'
import { eftuarLogout } from '../reducers/usuarioActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
export class MenuComponent extends Component {
    render() {
        const { eftuarLogout } = this.props
        return (
            <div>
                <MenuItem to={'/home'} component={Link}>Home</MenuItem>
                <MenuItem to={'/cadastro'}  component={Link} >Cadastro</MenuItem>
                <MenuItem to={'/consulta'}  component={Link} >Consulta</MenuItem>
                <MenuItem to={'/home'}   component={Link} onClick={()=> eftuarLogout(false)} >Sair</MenuItem>
            </div>
        )
    }
} 
const mapDispatchToProps = dispatch => bindActionCreators({
    eftuarLogout,
}, dispatch)
export default connect(null, mapDispatchToProps)(MenuComponent)