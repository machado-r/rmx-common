import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import withMobileDialog from '@material-ui/core/withMobileDialog';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const AlertDialogSlide = (props) => {
  const [open, setOpen] = useState(true);

  const handleAction = (confirmation) => {
    props.action(confirmation);
    setOpen(false);
  };

  const handleClose = () => {
    if (props.close) {
      props.close();
    }
    setOpen(false);
  };

  const { title, message, no, yes } = props;
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message ? message : props.children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={
              props.confirm ? () => handleAction(false) : () => handleClose()
            }>
            {no}
          </Button>
          <Button onClick={() => handleAction(true)} color="secondary">
            {yes}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withMobileDialog()(AlertDialogSlide);
