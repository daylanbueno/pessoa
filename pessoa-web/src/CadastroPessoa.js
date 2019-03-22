import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
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
    const {classes}  = this.props
    return (
      <div style={{width: '80%'}}>
      <Card justify='center'>
        <CardContent className={classes.card}>
          <Typography variant="h5" component="h2">
            Incluir pessoa
          </Typography>
           <br/>
          <Grid container spacing={24}> 
            <Grid item xs={12}>
               <Grid item xs={6}>
                  <TextField
                    id="outlined-full-width"
                    label="Nome completo"
                    style={{ margin: 10, with: 50 }}
                    placeholder="Entre com o nome completo"
                    fullWidth
                    margin="normal"
                    variant="outlined"/>
                </Grid>
            </Grid>

            <Grid item xs={6}>
              <TextField
                  id="outlined-email-input"
                  label="Email"
                  style={{ margin: 8 }}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  placeholder="Entre com o nome email"
                  fullWidth
                  variant="outlined"/>
            </Grid>
        </Grid>
        </CardContent>
      </Card>
      </div>
    );
  }
}

CadastroPessoa.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CadastroPessoa);