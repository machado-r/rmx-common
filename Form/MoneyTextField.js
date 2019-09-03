import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getSafe, propsAreEqual } from '_helpers/utils';

const MoneyTextField = (props) => {
  const { label, field, formik, xs, md, prefix, onBlur } = props;
  const value = getSafe(formik.values, field);
  // const touched = getSafe(formik.touched, field, false);
  const touched = true;
  const error = getSafe(formik.errors, field, false);
  const change = formik.change;
  const helperText = props.helperText ? props.helperText : '';

  return (
    <Grid item xs={xs} md={md}>
      <TextField
        id={field}
        name={field}
        helperText={touched ? error : helperText}
        error={touched && Boolean(error)}
        label={label}
        fullWidth
        value={value}
        onChange={change.bind(null, field)}
        variant="outlined"
        type="tel"
        onBlur={onBlur ? () => onBlur(value) : null}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{prefix}</InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default React.memo(MoneyTextField, propsAreEqual);
