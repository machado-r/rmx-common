import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDharmachakra } from '@fortawesome/free-solid-svg-icons';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Spinner = (props) => {
  const { classes, size, text, noBox } = props;
  if (noBox) {
    return (
      <div className={classes.noBox}>
        <Typography variant="overline" align="center">
          <div>
            <FontAwesomeIcon
              icon={faDharmachakra}
              spin
              fixedWidth
              size={size}
              className={classes.noBoxColor}
            />
          </div>
          {text || 'Carregando'}
        </Typography>
      </div>
    );
  }

  return (
    <Paper>
      <Typography variant="overline" align="center">
        <div className={classes.root}>
          <FontAwesomeIcon
            icon={faDharmachakra}
            spin
            fixedWidth
            size={size}
            className={classes.spinnerColor}
          />
        </div>
        {text || 'Carregando...'}
      </Typography>
    </Paper>
  );
};

const styles = (theme) => ({
  root: {
    color: 'white',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  spinnerColor: {
    color: 'black',
    marginTop: theme.spacing(2),
  },

  noBox: {
    color: 'black',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  noBoxColor: {
    color: 'black',
  },
});

export default withStyles(styles)(Spinner);
