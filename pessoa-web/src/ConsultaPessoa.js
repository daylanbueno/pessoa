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

const styles = {
  card: {
    minWidth: 250,
    maxWidth:2300,
    margin:20,
    height:600

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
  render() {
    const {classes} = this.props
    return ( 
      <div>
      <Card className={classes.card}>
        <Typography  variant="subtitle1" gutterBottom>
            Dados pessoas
        </Typography>
        <CardActions>
          <Grid container spacing={16} className={classes.grid}>
            
            <Grid item xs={12}> 
               <Cpf id="outlined-full-width" 
                    margin="normal"
                    className={classes.inputCpf}
                    label="CPF" 
                    autoFocus 
                    placeholder='Digite o cpf'
                    variant='outlined'/>
            </Grid>
          
            <Grid item xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Nome"
                    className={classes.input}
                    placeholder="Entre com partes do nome"
                    fullWidth
                    margin="normal"
                    variant="outlined"/>
            </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="primary" className={classes.button}>
                  Pesquisar
                </Button>
                <Button variant="contained" className={classes.button}>
                  Cancelar
                </Button>
              </Grid>

              <Grid item xs={12}> 
                <TabelaResultadoPessoa/>
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