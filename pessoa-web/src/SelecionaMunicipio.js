import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

class SimpleSelect extends React.Component {
  state = {
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  
  }

  handleChange = event => {
    const  { municipios } = this.props
    this.setState({ [event.target.name]: event.target.value });
    const municipio = municipios.find(item => item.id === event.target.value)
 
    this.props.callbackSelecionaMunicipio(municipio)
  };

  render() {
    const { classes } = this.props;
    console.log('Municípios: >',this.props.municipios)
    return (
      <form autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl} fullWidth>
            <InputLabel ref={ref => {
                this.InputLabelRef = ref;
                }}
                htmlFor="outlined-age-simple"
            >
            Município
          </InputLabel>
          <Select
            value={this.props.municipio.id}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
          <MenuItem value="">
              <em>Seleciona o muncípio</em>
          </MenuItem>
          {this.props.municipios.map(municipio => {
            return(
              <MenuItem key={municipio.id} value={municipio.id}>{municipio.nome}</MenuItem>
            )
          })}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
