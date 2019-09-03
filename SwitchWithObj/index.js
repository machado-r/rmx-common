import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

function SwitchLabels(props) {
  const { label, handleChange, data, classes, name } = props;
  let item = data[name];

  return (
    <Grid item xs={6}>
      <div className={classes.switch}>
        <FormControlLabel
          control={
            <Switch
              checked={item.enabled}
              onChange={() =>
                handleChange(name, { ...item, enabled: !item.enabled })
              }
              value="checkedB"
              color="primary"
            />
          }
          label={label}
        />
      </div>
    </Grid>
  );
}

export default withStyles(styles)(SwitchLabels);
