import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class TabelaResultadoPessoa extends React.Component {
  state = {
    rows : [
        {'nome':'DAILAN BUENO DOS SANTOS', 'cpf':'045.013.481-43','celular':'(61)99160-2632','telefone':'(61)3201-2632', 'email':'admin@gmail.com.br'},
        {'nome':'AMANDA CRISTINA PEREIRA', 'cpf':'023.321.258-22','celular':'(61)98113-2632','telefone':'(61)3201-2632','email':'admin@gmail.com.br'},
        {'nome':'DILAN BUENO RODRIGUES', 'cpf':'001.005.009-45','celular':'(61)99160-2632','telefone':'(61)3201-2632','email':'admin@gmail.com.br'},
        {'nome':'DARLAN BUENO FERNANDES', 'cpf':'045.013.481-43','celular':'(61)99160-2632','telefone':'(61)3201-2632','email':'admin@gmail.com.br'},
        {'nome':'MARIA PEREIRA SANTOS', 'cpf':'045.013.481-43','celular':'(61)99160-2632','telefone':'(61)3201-2632','email':'admin@gmail.com.br'},
        {'nome':'EDUARDA NEGUEIRA SILVA', 'cpf':'045.013.481-43','celular':'(61)99160-2632','telefone':'(61)3201-2632','email':'admin@gmail.com.br'}
      ]
  };

  render() {
    const { classes } = this.props;
    const { rows } = this.state;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>
                    {row.nome}
                  </TableCell>
                  <TableCell>
                    {row.email}
                  </TableCell>
                  <TableCell >
                    {row.cpf}
                  </TableCell>
                  <TableCell>
                    {row.celular}
                  </TableCell>
                  <TableCell >
                    {row.telefone}
                  </TableCell>
                  <TableCell>
                    Botoes
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

TabelaResultadoPessoa.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabelaResultadoPessoa);