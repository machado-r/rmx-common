import React from 'react';
import Grid from '@material-ui/core/Grid';

export default (props) => {
  return (
    <Grid container spacing={2}>
      {props.children}
    </Grid>
  );
};
