import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { getSafe, propsAreEqual } from '_helpers/utils';

const FormTextField = (props) => {
  const {
    label,
    field,
    formik,
    xs,
    md,
    type,
    styleProps,
    onBlur,
    disabled,
    onKeyDown,
  } = props;
  const value = getSafe(formik.values, field, '');
  // const touched = getSafe(formik.touched, field, false);
  const touched = true;
  const error = getSafe(formik.errors, field, false);
  const change = formik.change;
  const tipo = type ? type : 'text';
  const InputProps = styleProps ? styleProps.InputProps : null;
  const InputLabelProps = styleProps ? styleProps.InputLabelProps : null;
  const helperText = props.helperText ? props.helperText : '';
  const rows = props.rows;

  return (
    <Grid item xs={xs} md={md}>
      <TextField
        id={field}
        name={field}
        helperText={touched ? error : helperText}
        error={Boolean(touched) && Boolean(error)}
        label={label}
        fullWidth
        value={value !== null ? value : ''}
        onChange={change.bind(null, field)}
        variant="outlined"
        type={tipo}
        InputProps={InputProps}
        InputLabelProps={InputLabelProps}
        onBlur={onBlur ? () => onBlur(value) : null}
        disabled={disabled}
        onKeyDown={onKeyDown ? (e) => onKeyDown(e) : null}
        multiline={rows ? true : false}
        rowsMax={rows ? rows : 1}
      />
    </Grid>
  );
};

export default React.memo(FormTextField, propsAreEqual);
