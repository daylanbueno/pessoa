import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios  from 'axios'
import  { URL_BASE }  from '../src/util/Url'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

class SimpleSelect extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
    estados:[]
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
    this.recuperarTodosOsEstados()
  }
  
  recuperarTodosOsEstados(){
    axios.get(`${URL_BASE}/estados`)
    .then(resp => {
      this.setState({estados:resp.data})
    }).catch (e => {
      console.log('Error: ',e)
    })
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const {estados} = this.state
    return (
      <form  autoComplete="off" >
        <FormControl variant="outlined" className={classes.formControl} fullWidth>
            <InputLabel ref={ref => {
                this.InputLabelRef = ref;
                }}
                htmlFor="outlined-age-simple"
            >
            Estado
          </InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
          {estados.map( estado => {
            return(
              <MenuItem value={estado.id}>{estado.nome}</MenuItem>
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
