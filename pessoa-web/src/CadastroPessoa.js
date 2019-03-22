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
    minWidth: 275,
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
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Incluir pessoa
          </Typography>
           <br/>
          <Grid container spacing={24}>
            <Grid item xs={11}>
              <TextField
                id="outlined-full-width"
                label="Nome completo"
                style={{ margin: 8 }}
                placeholder="Entre com o nome completo"
                fullWidth
                margin="normal"
                variant="outlined"/>
            </Grid>
        </Grid>

        </CardContent>
      </Card>
    );
  }
}

CadastroPessoa.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CadastroPessoa);