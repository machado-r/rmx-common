import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ReactComponent as Brazil } from '../SVG/brazil.svg';
import { ReactComponent as Earth } from '../SVG/earth.svg';
import { getSafe, propsAreEqual } from '_helpers/utils';

const startAdornment = (value) => {
  if (value && value.includes('+')) {
    return (
      <InputAdornment position="start">
        <Earth
          style={{
            width: '20px',
          }}
        />
      </InputAdornment>
    );
  } else {
    return (
      <InputAdornment position="start">
        <Brazil
          style={{
            width: '25px',
          }}
        />
      </InputAdornment>
    );
  }
};

const FormTextField = (props) => {
  const { label, field, formik, xs, md, type } = props;
  const value = getSafe(formik.values, field);
  const touched = getSafe(formik.touched, field);
  const error = getSafe(formik.errors, field);
  const change = formik.change;
  const tipo = type ? type : 'text';

  return (
    <Grid item xs={xs} md={md}>
      <TextField
        id={field}
        name={field}
        helperText={touched ? error : 'Comece com "+" caso estrangeiro'}
        error={touched && Boolean(error)}
        label={label}
        fullWidth
        value={value}
        onChange={change.bind(null, field)}
        variant="outlined"
        type={tipo}
        InputProps={{ startAdornment: startAdornment(value) }}
      />
    </Grid>
  );
};

export default React.memo(FormTextField, propsAreEqual);
