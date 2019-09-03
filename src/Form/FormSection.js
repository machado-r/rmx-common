import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SectionTitle from './SectionTitle';

export default (props) => {
  const { classes, title, justify } = props;
  return (
    <>
      <SectionTitle title={title} class={classes.title} />
      <Paper className={classes.root}>
        <Grid container spacing={2} justify={justify}>
          {props.children}
        </Grid>
      </Paper>
    </>
  );
};
