import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import  { URL_BASE } from '../util/Url'
import axios from 'axios'
import { showMsgError } from '../util/Menssages';

import { efetuarLogin } from '../reducers/usuarioActions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const styles = {  
    card: {
      height:350,
      width:500,
      marginLeft:'35%',
      marginHight:'40%', 
      marginTop:'10%', 
    },
    textField: {
        width: 400,
    },
    button: {
        marginLeft: 400
    },
    titulo: {
      margin:20,
      color:'#3f51b5'
    }
  };

class  Login extends Component {

    state = {
        usuario: {
            login:'',
            senha:''
        }
    }

    logar() {
        const { usuario } = this.state
        axios.post(`${URL_BASE}/login`,usuario)
        .then(resp => {
            const token = resp.headers['authorization']
            const nomeUsuarioLogado = resp.data
            localStorage.setItem('token', token)
            localStorage.setItem('nomeUsuario', nomeUsuarioLogado)
            localStorage.setItem('usuarioLogado', usuario.login)
           this.props.efetuarLogin(true)
        }).catch (e => {
            showMsgError('Usuário ou senha invalida!')
          console.log('Error: ',e)
        })
      }

    handleChange(nomeCampo,evento) {
       const { usuario } = this.state
       usuario[nomeCampo] = evento.target.value
       this.setState({usuario:usuario})
       console.log('user',this.state.usuario)
    };

    efetuarLogin(event) {
        if (event.key === 'Enter') {
            this.logar()
          }
    }

    render() {
        const { classes } = this.props
        return (
            <Card className={classes.card}>
                <CardContent>
                <Typography className={classes.titulo} gutterBottom>
                    Sistema de controle de pessoa
                </Typography>
                <Typography >
                    <TextField
                        id="standard-name"
                        label="Login"
                        className={classes.textField}
                        value={this.state.login}
                        onChange={this.handleChange.bind(this,'login')}
                        margin="normal"
                    />
                </Typography>
                <Typography variant="body2" component="p">
                  <TextField
                        id="standard-name"
                        label="Senha"
                        className={classes.textField}
                        value={this.state.senha}
                        onChange={this.handleChange.bind(this,'senha')}
                        type="password"
                        margin="normal"
                    />
                </Typography>
                </CardContent>
                <CardActions>
                 <Button  onClick={()=> this.logar()} className={classes.button}>Entrar</Button>
                </CardActions>
          </Card>
        )
    }
} 
const materialUIEnhance = withStyles(styles)(Login)
const mapDispatchToProps = dispatch => bindActionCreators({
    efetuarLogin,
}, dispatch)
export default connect(null, mapDispatchToProps)(materialUIEnhance)