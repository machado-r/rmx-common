import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles';

function DashCard(props) {
  const { classes, info, data, text, action, icon, disabled } = props;
  return (
    <Paper className={classes.container}>
      <div className={classes.top}>
        <div className={classes.icon}>
          <FontAwesomeIcon
            icon={icon}
            className={classes.fIcon}
            fixedWidth
            size="lg"
          />
        </div>
        <div className={classes.infoContainer}>
          <Typography align="left" className={classes.data}>
            {data}
          </Typography>
          <Typography align="left" variant="caption" className={classes.info}>
            {info}
          </Typography>
        </div>
      </div>

      <div className={classes.action}>
        <Button
          disabled={disabled}
          size="small"
          fullWidth
          // variant="contained"
          onClick={action}
          color="primary"
          className={classes.button}>
          {text}
        </Button>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(DashCard);
