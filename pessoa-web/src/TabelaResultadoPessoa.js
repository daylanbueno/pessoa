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
import ConfirmDialogComponent from './componentes/ConfirmDialogComponent';

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
 

  state = {
    msg:'',
    tituloMsg:'',
    open:'',
    idPessoa:''
  }

  deletePessoaPorId(idPessoa) {
    this.props.callbackDeletePessoa(idPessoa)
  }

  abrirDialogConfirmacao(id) {
    this.setState({msg:'Deseja realmente excluir essa pessoa'})
    this.setState({titulo:'Exclusão de pessoa'})
    this.setState({open:true})
    this.setState({idPessoa:id})
  }

  fecharDialogConfirmacao() {
    this.setState({open:false})
  }

  render() {
    const { classes, pessoas } = this.props;    
    return (
      <div>
      <Paper className={classes.root} >
          <Table className={classes.table} 
           >
            <TableBody>
              {pessoas.map(row => (
                <TableRow key={row.id}>
                  <TableCell>
                    {row.nome}
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
                    <Button onClick={this.abrirDialogConfirmacao.bind(this,row.id)} >
                      <Icon icon={ic_delete} ></Icon>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </Paper>
      <ConfirmDialogComponent titulo={this.state.titulo}
                              msg={this.state.msg}
                              idPessoa={this.state.idPessoa}
                              open={this.state.open}
                              callbackFechaDialog={this.fecharDialogConfirmacao.bind(this)}
                              callBackExcluirPessoa={this.deletePessoaPorId.bind(this)}/>
      </div>
    );
  }
}

TabelaResultadoPessoa.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabelaResultadoPessoa);