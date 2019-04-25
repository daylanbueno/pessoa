import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ConfirmDialogComponent extends React.Component {

  handleClose = () => {
    this.props.callbackFechaDialog()
  };

  confirmar() {
    console.log('confirm',this.props.idPessoa)
    this.props.callBackExcluirPessoa(this.props.idPessoa)
    this.handleClose()
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.titulo}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.msg}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Não
            </Button>
            <Button onClick={this.confirmar.bind(this)} color="primary" autoFocus>
              Sim
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmDialogComponent;