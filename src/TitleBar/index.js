import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

function TitleBar(props) {
  const { classes, title, text } = props;

  return (
    <div className={classes.titleContainer}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="caption" className={classes.text}>
        {text}
      </Typography>
    </div>
  );
}

export default withStyles(styles)(TitleBar);
