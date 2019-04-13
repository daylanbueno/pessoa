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
import If from './util/If';


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
      cpf:'',
    },
    pessoas:[]
   }

   componentDidMount() {
     this.recuperarTodas();
   }

   recuperarPessoaPorCpf() {
    console.log('consultando')
    axios.get(`${URL_BASE}/pessoas/cpf/${this.state.filtro.cpf}`)
    .then(resp => {
      const resultado = resp.data
      console.log('resutado',resultado)
      if(resultado.length === 0 ) {
        showMsgError('Não foi encontrado resultado que atenda os parametros da pesquisa.')
      }
      this.setState({pessoas:resultado})
    }).catch (e => {
      console.log('Error: ',e)
    })
  }

  recuperarTodas() {
    axios.get(`${URL_BASE}/pessoas`)
    .then(resp => {
      const resultado = resp.data
      this.setState({pessoas:resultado})
    }).catch (e => {
      console.log('Error: ',e)
    })
  }


  recuperarPessoaPorNome() {
    axios.get(`${URL_BASE}/pessoas/nome/${this.state.filtro.nome}`)
    .then(resp => {
      const resultado = resp.data
      if(resultado.length === 0) {
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
      return
    }
    if(this.state.filtro.nome !=='') {
      this.recuperarPessoaPorNome()
      return
    }
    this.recuperarTodas()    
  }

  efetuarConsultaPeloEnter = (event) => {
    console.log("enter")
    // if (event.key === 'Enter') {
    //   this.carregarPessoa()
    // }
  }

  limpar() {
    const { filtro } = this.state;
    filtro['nome'] = ''
    filtro['cpf'] = ''
    this.setState({filtro:filtro})
    console.log('filtro',this.state.filtro)
  }

  onChange(nomeCampo, evento) {
    const { filtro } = this.state;
    filtro[nomeCampo] = evento.target.value
    this.setState({filtro:filtro})
  }

  render() {
    const { classes } = this.props
    const { filtro } = this.state
    
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
                    value={filtro.cpf}
                    disabled={this.state.filtro.nome !==''} 
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
                    value={filtro.nome}
                    className={classes.input}
                    placeholder="Entre com partes do nome"
                    fullWidth
                    margin="normal"
                    variant="outlined"/>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" className={classes.button} onClick={this.carregarPessoa.bind(this)} onKeyPress={this.efetuarConsultaPeloEnter}>
                Pesquisar
              </Button>
              <Button variant="contained" className={classes.button} onClick={this.limpar.bind(this)}>
                Cancelar
              </Button>
            </Grid> 

            <Grid item xs={12}> 
            <If test={this.state.pessoas.length > 0 }>
              <TabelaResultadoPessoa pessoas={this.state.pessoas}/>
            </If>  
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