import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Icon } from 'react-icons-kit'
import { checkCircle } from 'react-icons-kit/fa/checkCircle'
import {search} from 'react-icons-kit/fa/search'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Cpf from './Cpf';
import  { URL_BASE } from '../util/Url'
import axios from 'axios'
import { showMsgError, showMsgSuccess } from '../util/Menssages';

const styles = {  
    card: {
      height:500,
      margin:20
    },
    grid: {
      margin:15
    },
    input: {
      margin: 10,
      marginLef:10,
      marginHeight:10
    },
    button: {
      margin: 25
    },
    buttonLogin: {
        margin: 10,
        height:55,
        width:50
    },
    inputCpf: {
      margin: 10,
      width:400
    },
    inputCnpj: {
      margin: 10,
      width:400
    },
    titulo: {
      margin:20,
      color:'#3f51b5'
    }
  };
  
  
export  class UsuarioCadastro extends Component {
    state = {
        nome:'',
        form: { 
            login:'',
            senha:'',
            idPessoa:'',
            cpf:''
        }
    }

    salvarPessoa () {
      const { form } = this.state
      if (this.temCampoInvalido()) {
        return
      }
      axios.post(`${URL_BASE}/usuarios`,form)
      .then(resp => {
        this.limparCampos();
        showMsgSuccess('Operação realizada com sucesso!')
      }).catch (e => {
        console.log('Error: ',e)
      })
    }

    limparCampos() {
      const { form } = this.state
      form['login'] = ''
      form['senha'] = ''
      form['cpf'] = ''
      this.setState({nome:'',form:form})
    }

    temCampoInvalido() {
      const { form } = this.state
      if(form['login'] ==='') {
        showMsgError('O campo login é obrigatório')
        return true
      }
      if(form['senha'] ==='') {
        showMsgError('O campo senha é obrigatório')
        return true
      }
    }

    recuperarPessoaPorCpf() {
        const {  form } = this.state
        if (form['cpf'] ==='') {
            showMsgError('O campo CPF é obrigatório')
            return 
        }
        axios.get(`${URL_BASE}/usuarios/${form['cpf']}`)
        .then(resp => {
          const usuario = resp.data
          if(usuario === "" ) {
            showMsgError('Para efetuar o cadastro deve ter uma pessoa cadastrada.')
          }
          form['idPessoa'] = usuario.idPessoa
          form['login'] = usuario.login
          this.setState({nome:usuario.nome, form:form})
        }).catch (e => {
          console.log('Error: ',e)
        })
      }

    onChange(nomeCampo, evento) {
        const { form } = this.state
        form[nomeCampo] = evento.target.value
        this.setState({form:form})
    }

    onChangeFiltro(evento) {
        this.setState({cpf: evento.target.value})
    }

    render() {
        const { classes } = this.props
        const { form, nome } = this.state
        return (
      <Card className={classes.card}>
        <Typography className={classes.titulo}  variant="display1" gutterBottom>
            Cadastro de usuário
        </Typography>
        <CardActions>
          <Grid container spacing={16} className={classes.grid}>
            <Grid item xs={12}> 
                <Cpf id="outlined-full-width" 
                    margin="normal"
                    className={classes.inputCpf}
                    value={form.cpf}
                    onChange={this.onChange.bind(this,'cpf')}
                    label="CPF" 
                    autoFocus 
                    placeholder='Digite o cpf'
                    variant='outlined'
                />
                <Button variant="contained" color="primary" className={classes.buttonLogin} onClick={this.recuperarPessoaPorCpf.bind(this)}>
                    <Icon icon={search} ></Icon>
                </Button>
            </Grid>
          
            <Grid item xs={12}>
                <TextField
                    id="outlined-full-width"
                    label="Nome"
                    value={nome}
                    disabled={true}
                    onChange={this.onChange.bind(this,'nome')}
                    className={classes.input}
                    placeholder="Entre com o nome completo"
                    fullWidth
                    margin="normal"
                    variant="outlined"/>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-full-width"
                    label="Login"
                    value={form.login}
                    onChange={this.onChange.bind(this,'login')}
                    className={classes.input}
                    placeholder="Entre com login"
                    margin="normal"
                    variant="outlined"/>
                <TextField
                    id="outlined-full-width"
                    label="senha"
                    value={form.senha}
                    onChange={this.onChange.bind(this,'senha')}
                    className={classes.input}
                    placeholder="Entre com  sua senha"
                    type="password"
                    margin="normal"
                    variant="outlined"/>
            </Grid>
              <Grid item xs={12}>
                 <Button variant="contained" color="primary" className={classes.button} onClick={this.salvarPessoa.bind(this)}>
                    Salvar  <Icon icon={checkCircle} ></Icon>
                  </Button>
              </Grid>             
          </Grid>
        </CardActions>
      </Card>
        )
    }
} 

UsuarioCadastro.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(UsuarioCadastro);