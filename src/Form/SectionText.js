import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const SectionText = (props) => {
  const { align } = props;
  return (
    <Grid item xs={12}>
      <Typography variant="body1" gutterBottom align={align} component="div">
        {props.children}
      </Typography>
    </Grid>
  );
};

export default SectionText;
