import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Cpf from './componentes/Cpf';
import Button from '@material-ui/core/Button';
import TabelaResultadoPessoa from './TabelaResultadoPessoa';
import  { URL_BASE } from './util/Url'
import axios from 'axios'
import { showMsgError } from './util/Menssages';

const styles = {
  card: {
    minWidth: 250,
    maxWidth:2300
  },

  input: {
    margin: 10
  },

  button: {
    margin: 25
  },
  inputCpf: {
    margin: 10,
    width:400

  }
};

class CadastroPessoa extends Component {

   state = {
    filtro:{
      nome:'',
      cpf:''
    },
    pessoas:[]
   }

   recuperarPessoaPorCpf() {
    axios.get(`${URL_BASE}/pessoa/cpf/${this.state.filtro.cpf}`)
    .then(resp => {
      const resultado = resp.data
      if(resultado ==='') {
        showMsgError('Não foi encontrado resultado que atenda os parametros da pesquisa.')
      }
      this.setState({pessoas:resultado})
    }).catch (e => {
      console.log('Error: ',e)
    })
  }


  carregarPessoa() {
    if(this.state.filtro.cpf !=='') {
      this.recuperarPessoaPorCpf()
    }
  }


   onChange(nomeCampo, evento) {
    const { filtro } = this.state;
    filtro[nomeCampo] = evento.target.value
    this.setState({filtro:filtro})
    console.log('Value ',filtro)

  }

  render() {
    const {classes} = this.props
    return ( 
      <div>
      <Card className={classes.card}>
        <Typography  variant="subtitle1" gutterBottom>
            Dados pessoas
        </Typography>
        <CardActions>
          <Grid container spacing={24}>
            <Grid item xs={12}> 
               <Cpf id="outlined-full-width" 
                    margin="normal"
                    className={classes.inputCpf}
                    label="CPF" 
                    onChange={this.onChange.bind(this,'cpf')}
                    autoFocus 
                    placeholder='Digite o cpf'
                    variant='outlined'/>
            </Grid>
          
            <Grid item xs={10}>
                <TextField
                    id="outlined-full-width"
                    onChange={this.onChange.bind(this,'nome')}
                    label="Nome"
                    className={classes.input}
                    placeholder="Entre com partes do nome"
                    fullWidth
                    margin="normal"
                    variant="outlined"/>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" className={classes.button} onClick={this.carregarPessoa.bind(this)}>
                Pesquisar
              </Button>
              <Button variant="contained" className={classes.button}>
                Cancelar
              </Button>
            </Grid> 

            <Grid item xs={12}> 
              <TabelaResultadoPessoa pessoas={this.state.pessoas}/>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
    );
  }
}

CadastroPessoa.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CadastroPessoa);