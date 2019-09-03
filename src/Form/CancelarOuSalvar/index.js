import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import styles from './styles';

const CancelarOuSalvar = (props) => {
  const { classes } = props;
  const {
    isValid,
    handleSubmit,
    handleCancel,
    cancelText,
    saveText,
    position,
    disableCancel,
  } = props.save;

  return (
    <div className={position ? classes.end : classes.cancelarOuSalvar}>
      {disableCancel ? null : (
        <Button
          className={classes.button}
          variant="outlined"
          color="default"
          onClick={handleCancel || props.history.goBack}>
          {cancelText || 'cancelar'}
        </Button>
      )}
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disabled={!isValid}
        onClick={handleSubmit}>
        {saveText || 'salvar'}
      </Button>
    </div>
  );
};

export default withRouter(withStyles(styles)(CancelarOuSalvar));
