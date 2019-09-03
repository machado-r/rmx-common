import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import { getSafe } from '_helpers/utils';

function SwitchLabels(props) {
  const { label, field, formik, disabled, classes } = props;
  const value = getSafe(formik.values, field);
  const touched = getSafe(formik.touched, field);
  const error = getSafe(formik.errors, field);
  const change = formik.change;
  const helperText = props.helperText ? props.helperText : '';

  // console.log('swicth value', value);
  // console.log('field', field);

  return (
    <Grid item xs={6}>
      <div className={classes.switch}>
        <FormControlLabel
          id={field}
          helpertext={touched ? error : helperText}
          label={label}
          error={touched && Boolean(error)}
          disabled={disabled}
          control={
            <Switch
              checked={value}
              onChange={change.bind(null, field)}
              value={value}
              color="primary"
            />
          }
        />
      </div>
    </Grid>
  );
}

export default withStyles(styles)(SwitchLabels);
