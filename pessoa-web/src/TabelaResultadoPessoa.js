import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit'
import { Button } from '@material-ui/core';
import { Icon } from 'react-icons-kit'
import {ic_delete} from 'react-icons-kit/md/ic_delete'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    height: 400,
    overflow: 'auto',  
  },  
  table: {
    minWidth: 100,
    overflow: 'auto'
  }
});

class TabelaResultadoPessoa extends React.Component {
 
  render() {
    const { classes, pessoas } = this.props;    
    return (
      <Paper className={classes.root} >
          <Table className={classes.table} 
           >
            <TableBody>
              {pessoas.map(row => (
                <TableRow key={row.id}>
                  <TableCell>
                    {row.nomeCompleto}
                  </TableCell>
                  <TableCell>
                    {row.contato.email}
                  </TableCell>
                  <TableCell >
                    {row.cpf}
                  </TableCell>
                  <TableCell>
                    {row.contato.celular}
                  </TableCell>
                  <TableCell >
                    {row.contato.telefone}
                  </TableCell>
                  <TableCell>
                    <Button component={Link}  to={`/cadastro?idPessoa=${row.id}`} >  
                      <Icon icon={ic_mode_edit} ></Icon>
                    </Button>
                    <Button>
                      <Icon icon={ic_delete} ></Icon>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </Paper>
    );
  }
}

TabelaResultadoPessoa.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabelaResultadoPessoa);