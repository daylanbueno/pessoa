import React, { Component } from 'react';
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
import Data from './componentes/Data';
import SelecionaEstado from './SelecionaEstado';
import SelecionaMunicipio from './SelecionaMunicipio';
import Button from '@material-ui/core/Button';

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
  render() {
    const {classes} = this.props
    return ( 
      <div>
      <Card className={classes.card}>
        <Typography className={classes.titulo}  variant="display1" gutterBottom>
            Dados pessoas
        </Typography>
        <CardActions>
          <Grid container spacing={16}>
            <Grid item xs={12}> 
               <Cpf id="outlined-full-width" 
                    margin="normal"
                    className={classes.inputCpf}
                    label="CPF" 
                    autoFocus 
                    placeholder='Digite o cpf'
                    variant='outlined's/>
                <Data variant='outlined'
                    placeholder="exemplo 01/02/1993"
                    label='Data Nascimento'
                    className={classes.input}/>     
            </Grid>
          
            <Grid item xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Nome completo"
                    className={classes.input}
                    placeholder="Entre com o nome completo"
                    fullWidth
                    margin="normal"
                    variant="outlined"/>
            </Grid>

            <Grid item xs={2}>
              <SelecionaSexo />
            </Grid>
          
            <Grid item xs={6}>
                <TextField
                    id="outlined-email-input"
                    label="Email"
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
                    fullWidth
                    className={classes.input}/>
             </Grid>

             <Grid item xs={3}>
                  <Telefone variant='outlined'
                    placeholder="Número de telefone"
                    label='Telefone'
                    fullWidth
                    className={classes.input}/>
             </Grid>       

             <Grid item xs={10}>
                <TextField
                    label="Logradouro"
                    className={classes.input}
                    placeholder="Entre com o  logradouro"
                    fullWidth
                    variant="outlined"/>
             </Grid>

             <Grid item xs={2}>
                <TextField
                    id="outlined-full-width"
                    label="Número"
                    fullWidth
                    className={classes.input}
                    placeholder="Entre com o número"
                    variant="outlined"/>
            </Grid>

             <Grid item xs={6}>
                <TextField
                    label="Complemento"
                    className={classes.input}
                    placeholder="Entre com o  complemento"
                    fullWidth
                    variant="outlined"/>
             </Grid>

             <Grid item xs={3}>
                <SelecionaEstado/>
             </Grid>
             <Grid item xs={3}>
                <SelecionaMunicipio/>
             </Grid>

              <Grid item xs={12}>
                 <Button variant="contained" color="primary" className={classes.button}>
                    Cadastrar
                  </Button>
                  <Button variant="contained" className={classes.button}>
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