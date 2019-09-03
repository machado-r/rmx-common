import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const GroupText = (props) => {
  return (
    <Grid item xs={12}>
      <Typography variant="body2" component="div">
        {props.children}
      </Typography>
    </Grid>
  );
};

export default GroupText;
