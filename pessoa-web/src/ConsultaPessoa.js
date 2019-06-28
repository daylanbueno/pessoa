import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Cpf from './componentes/Cpf';
import Button from '@material-ui/core/Button';
import TabelaResultadoPessoa from './TabelaResultadoPessoa';
import  { URL_BASE } from './util/Url'
import axios from 'axios'
import { showMsgError, showMsgSuccess } from './util/Menssages';
import If from './util/If';
import Cnpj from './componentes/Cnpj';
import { Link } from 'react-router-dom'


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
  },
  inputCnpj: {
    margin: 10,
    width:400
  },
  titulo: {
    margin:20,
    color:'#3f51b5'
  },
  radios: {
    margin:10
  }

};

class CadastroPessoa extends Component {

   state = {
    isPessoaFisica:true,
    filtro:{
      nome:'',
      cpf:'',
      cnpj:''
    },
    pessoas:[]
   }

   componentDidMount() {
     this.recuperarTodas();
   }

   recuperarPessoaPorCpf() {
    axios.get(`${URL_BASE}/pessoas/cpf/${this.state.filtro.cpf}`)
    .then(resp => {
      const resultado = resp.data
      if(resultado.length === 0 ) {
        showMsgError('Não foi encontrado resultado que atenda os parametros da pesquisa.')
      }
      this.setState({pessoas:resultado})
    }).catch (e => {
      console.log('Error: ',e)
    })
  }

  recuperarPessoaPorCnpj() {
    const cnpj = this.state.filtro.cnpj
    axios.get(`${URL_BASE}/pessoas/cnpj/?cnpj=${cnpj}`,)
    .then(resp => {
      const resultado = resp.data
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
    const { isPessoaFisica } = this.state
    if(this.state.filtro.cpf !=='' && isPessoaFisica) {
      this.recuperarPessoaPorCpf()
      return
    }
    if(this.state.filtro.cnpj !==''  && !isPessoaFisica) {
      this.recuperarPessoaPorCnpj()
      return
    }
    if(this.state.filtro.nome !=='') {
      this.recuperarPessoaPorNome()
      return
    }
    this.recuperarTodas()    
  }

  deletaPessoa(id){
    axios.delete(`${URL_BASE}/pessoas/id/${id}`)
    .then(resp => {
      showMsgSuccess('Operação realizada com sucesso!')
      this.recuperarTodas()
    }).catch (e => {
      console.log('Error: ',e)
    })
  }

  limpar() {
    const { filtro } = this.state;
    filtro['nome'] = ''
    filtro['cpf'] = ''
    filtro['cnpj'] = ''
    this.setState({filtro:filtro})
  }

  onChange(nomeCampo, evento) {
    const { filtro } = this.state;
    filtro[nomeCampo] = evento.target.value
    this.setState({filtro:filtro})
  }

  renderCpfCnpj() {
    const { filtro, isPessoaFisica  } = this.state
    const {classes} = this.props
    if(isPessoaFisica) {
      return (
        <Cpf id="outlined-full-width" 
          margin="normal"
          className={classes.inputCpf}
          label="CPF"
          value={filtro.cpf}
          disabled={filtro.nome !==''} 
          onChange={this.onChange.bind(this,'cpf')}
          autoFocus 
          placeholder='Digite o cpf'
          variant='outlined'/> 
      )
    } else {
      return (
        <Cnpj id="outlined-full-width" 
          margin="normal"
          className={classes.inputCnpj}
          value={filtro.cnpj}
          onChange={this.onChange.bind(this,'cnpj')}
          label="CNPJ" 
          autoFocus 
          placeholder='Digite o cnpj'
          variant='outlined'
        />
      )
    }
  }
  
  handleChange(event) {
    var isPessoaFisica = (event.target.value === "true")
    this.setState({isPessoaFisica:isPessoaFisica})
    this.limpar()
  }


  render() {
    const { classes } = this.props
    const { filtro } = this.state
    
    return ( 
      <div>
      <Card className={classes.card}>
        <Typography  className={classes.titulo} variant="display1" gutterBottom>
            Dados pessoas
        </Typography>
        
        <CardActions >
          <Grid container spacing={24}>
            <Grid item xs={12} className={classes.radios}> 
                <FormControlLabel
                label="Fisica"
                control={<Radio checked={this.state.isPessoaFisica} onChange={this.handleChange.bind(this)} value="true"  color="primary"/>}
                >
                </FormControlLabel>
                <FormControlLabel
                label="Juridica"
                control={<Radio checked={!this.state.isPessoaFisica} onChange={this.handleChange.bind(this)} value="false"  color="primary"/>}
                >
                </FormControlLabel>
            </Grid>

            <Grid item xs={12}> 
               {this.renderCpfCnpj()}
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
              <Button variant="contained" component={Link}  to={`/cadastro`}>
                    Incluir Novo 
               </Button>

            </Grid> 

            <Grid item xs={12}> 
            <If test={this.state.pessoas.length > 0 }>
              <TabelaResultadoPessoa pessoas={this.state.pessoas}
                                     callbackDeletePessoa={this.deletaPessoa.bind(this)}/>
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