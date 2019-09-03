import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

function SectionTitle(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography variant="button" gutterBottom className={classes.title}>
        {props.title}
      </Typography>
    </div>
  );
}

export default withStyles(styles)(SectionTitle);
