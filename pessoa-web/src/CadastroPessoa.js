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

const styles = {
  root: {
    flexGrow: 1,
  },

  card: {
    minWidth: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class CadastroPessoa extends Component {
  render() {
    return ( 
      <div>
      <Card>
        <Typography  variant="subtitle1" gutterBottom>
            Dados pessoas
        </Typography>
        <CardActions>
          <Grid container spacing={24}>
            <Grid item xs={12}>  
               <Cpf id="outlined-full-width" margin="normal" style={{ margin: 10, width:400}} label="CPF" autoFocus placeholder='Digite o cpf' variant='outlined' />
            </Grid>
            <Grid item xs={8}>
                <TextField
                  id="outlined-full-width"
                  label="Nome completo"
                  style={{ margin: 10}}
                  placeholder="Entre com o nome completo"
                  fullWidth
                  margin="normal"
                  variant="outlined"/>
            </Grid>
            <Grid item xs={4}>
              <SelecionaSexo/>
            </Grid>
            <Grid item xs={3}>
                <TextField
                  id="outlined-full-width"
                  label="Celular"
                  style={{ margin: 10}}
                  placeholder="Entre com o nome celular"
                  fullWidth
                  margin="normal"
                  variant="outlined"/>
            </Grid>
            <Grid item xs={3}>
              <TextField
                  id="outlined-full-width"
                  label="Telefone"
                  style={{ margin: 10}}
                  placeholder="Entre com o nome telefone"
                  fullWidth
                  margin="normal"
                  variant="outlined"/>
            </Grid>
            <Grid item xs={6}>
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  style={{ margin: 10 }}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  placeholder="Entre com o nome email"
                  fullWidth
                  variant="outlined"/>
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