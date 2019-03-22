import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from '@material-ui/core'

export default class MenuComponent extends Component {
    render() {
        return (
            <div>
                <MenuItem to={'/home'} component={Link}>Home</MenuItem>
                <MenuItem to={'/teste'}  component={Link} >ComponentTeste</MenuItem>
            </div>
        )
    }
} 