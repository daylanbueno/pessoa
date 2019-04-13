import React,{ Component }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SelecionaSexo from './SelecionaSexo';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Cpf from './componentes/Cpf';
import Celular from './componentes/Celular'
import Telefone from './componentes/Telefone';
import SelecionaEstado from './SelecionaEstado';
import SelecionaMunicipio from './SelecionaMunicipio';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import  { URL_BASE } from './util/Url'
import { showMsgSuccess } from './util/Menssages'
import queryString from 'query-string'

const styles = {  
  card: {
    height:650,
    margin:20
  },
  input: {
    margin: 10,
  },
  button: {
    margin: 25
  },
  inputCpf: {
    margin: 10,
    width:400
  },
  titulo: {
    margin:20,
    color:'#3f51b5'
  }
};

class CadastroPessoa extends Component {

  state = {
    idPessoa: queryString.parse(this.props.location.search).idPessoa,
    municipios:[],
    codEstado:'',
    form:{
        id:null,
        cpf:'',
        dataNascimento:'',
        nomeCompleto:'',
        sexo:'',
        email:'',
        celular:'',
        telefone:'',
        logradouro:'',
        numero:'',
        complemento:'',
        municipio:''
        }
    }
  
    componentDidMount() {
      const { idPessoa } = this.state
      if (idPessoa !== undefined) {
        this.recuperarPessoaParaEdicao(idPessoa);
      }
    }  


  recuperarMunicipioPorCodEstado(cod){
    this.setState({codEstado:cod})
    axios.get(`${URL_BASE}/municipios/${cod}`)
    .then(resp => {
      console.log('busco municipios ',resp.data)
      this.setState({municipios:resp.data})
    }).catch (e => {
      console.log('Error: ',e)
    })
  }

  salvarPessoa(){
    const param = this.criarParamentroPessoa()
    axios.post(`${URL_BASE}/pessoas`,param)
    .then(resp => {
      this.limparCampos();
      showMsgSuccess('Operação realizada com sucesso!')
    }).catch (e => {
      console.log('Error: ',e)
    })
  }

  recuperarPessoaParaEdicao(idPesso) {
    axios.get(`${URL_BASE}/pessoas/id/${idPesso}`)
    .then(resp => {
      const pessoa = resp.data
      this.popularDadosPessoaParaEdicao(pessoa)
      console.log('Pessoa ',resp.data)
    }).catch (e => {
      console.log('Error: ',e)
    })
  }

  popularDadosPessoaParaEdicao(pessoa) {
    const { form } = this.state;
    form['id'] = pessoa.id
    form['cpf'] = pessoa.cpf
    form['dataNascimento'] = pessoa.dataNascimento
    form['nomeCompleto'] = pessoa.nomeCompleto
    form['email'] = pessoa.contato.email
    form['celular'] = pessoa.contato.celular
    form['telefone'] = pessoa.contato.telefone
    form['logradouro'] = pessoa.endereco.logradouro
    form['municipio'] = pessoa.endereco.municipio
    form['complemento'] = pessoa.endereco.complemento
    form['numero'] =  pessoa.endereco.numero
    form['sexo'] = pessoa.sexo
    this.setState({codEstado:pessoa.endereco.municipio.estado.id})
    this.recuperarMunicipioPorCodEstado(this.state.codEstado)    
    this.setState({form:form})
  }


  limparCampos() {
    const { form } = this.state;
    form['id'] = null
    form['cpf'] = ''
    form['dataNascimento'] = ''
    form['nomeCompleto'] = ''
    form['email'] = ''
    form['celular'] = ''
    form['telefone'] = ''
    form['logradouro'] = ''
    form['municipio'] = ''
    form['complemento'] = ''
    form['numero'] = ''
    form['sexo'] = ''
    this.setState({codEstado:''})
    this.setState({form:form})
  }

  criarParamentroPessoa() {
    const form = this.state.form
    console.log('form',form)
    let pessoa = {
      id: form.id,
      cpf: form.cpf,
      dataNascimento:form.dataNascimento,
      nomeCompleto: form.nomeCompleto,
      sexo:form.sexo,
      contato: {
        email:form.email,
        celular:form.celular,
        telefone:form.telefone,
      },
      endereco: {
        logradouro:form.logradouro,
        numero:form.numero,
        complemento:form.complemento,
        municipio:form.municipio
      }
    }
    console.log('Pessoa param',pessoa)
    return pessoa
  }

  selecionaMunicipio(municipio) {
    const { form } = this.state;
    form['municipio'] = municipio
    this.setState({form:form})
  }


  selecionaSexo(sexo) {
    const { form } = this.state;
    form['sexo'] = sexo
    this.setState({form:form})
  }

  onChange(nomeCampo, evento) {
    const { form } = this.state;
    form[nomeCampo] = evento.target.value
    this.setState({form:form})

  }

  render() {
    const {classes} = this.props
    const { form } = this.state
    return ( 
      <div>
      <Card className={classes.card}>
        <Typography className={classes.titulo}  variant="display1" gutterBottom>
            Dados da pessoa
        </Typography>
        <CardActions>
          <Grid container spacing={16}>
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
                
                <TextField
                    type="date"
                    defaultValue="2017-05-24"
                    variant='outlined'
                    value={form.dataNascimento}
                    onChange={this.onChange.bind(this,'dataNascimento')}
                    label='Data Nascimento'
                    className={classes.input}
                    InputLabelProps={{
                      shrink: true,
                    }}/>     
            </Grid>
          
            <Grid item xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Nome completo"
                    value={form.nomeCompleto}
                    onChange={this.onChange.bind(this,'nomeCompleto')}
                    className={classes.input}
                    placeholder="Entre com o nome completo"
                    fullWidth
                    margin="normal"
                    variant="outlined"/>
            </Grid>

            <Grid item xs={2}>
              <SelecionaSexo sexo={this.state.form['sexo']} callbackSelecionaSexo={this.selecionaSexo.bind(this)} />
            </Grid>
          
            <Grid item xs={6}>
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    value={form.email}
                    onChange={this.onChange.bind(this,'email')}
                    className={classes.input}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    placeholder="Entre com o nome email"
                    fullWidth
                    variant="outlined"/>
             </Grid>       
              
             <Grid item xs={3}>
                <Celular variant='outlined'
                    placeholder="Número de celular"
                    label="Celular"
                    value={form.celular}
                    onChange={this.onChange.bind(this,'celular')}
                    fullWidth
                    className={classes.input}/>
             </Grid>

             <Grid item xs={3}>
                  <Telefone variant='outlined'
                    placeholder="Número de telefone"
                    label='Telefone'
                    value={form.telefone}
                    onChange={this.onChange.bind(this,'telefone')}
                    fullWidth
                    className={classes.input}/>
             </Grid>       

             <Grid item xs={10}>
                <TextField
                    label="Logradouro"
                    value={form.logradouro}
                    onChange={this.onChange.bind(this,'logradouro')}
                    className={classes.input}
                    placeholder="Entre com o  logradouro"
                    fullWidth
                    variant="outlined"/>
             </Grid>

             <Grid item xs={2}>
                <TextField
                    id="outlined-full-width"
                    label="Número"
                    value={form.numero}
                    onChange={this.onChange.bind(this,'numero')}
                    fullWidth
                    className={classes.input}
                    placeholder="Entre com o número"
                    variant="outlined"/>
            </Grid>

             <Grid item xs={6}>
                <TextField
                    label="Complemento"
                    value={form.complemento}
                    onChange={this.onChange.bind(this,'complemento')}
                    className={classes.input}
                    placeholder="Entre com o  complemento"
                    fullWidth
                    variant="outlined"/>
             </Grid>

             <Grid item xs={3}>
                <SelecionaEstado idEstado={this.state.codEstado} callbackSelecionaCodEstado={this.recuperarMunicipioPorCodEstado.bind(this)} />
             </Grid>
             <Grid item xs={3}>
                <SelecionaMunicipio municipio={this.state.form['municipio']} municipios={this.state.municipios} callbackSelecionaMunicipio={this.selecionaMunicipio.bind(this)}/>
             </Grid>

              <Grid item xs={12}>
                 <Button variant="contained" color="primary" className={classes.button} onClick={this.salvarPessoa.bind(this)}>
                    Cadastrar
                  </Button>
                  <Button variant="contained" className={classes.button} onClick={this.limparCampos.bind(this)} >
                    Cancelar
                 </Button>
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