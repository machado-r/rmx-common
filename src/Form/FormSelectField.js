import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { getSafe, propsAreEqual } from '_helpers/utils';

const FormSelectField = (props) => {
  const { label, field, formik, xs, md, options } = props;
  const value = getSafe(formik.values, field);
  const touched = getSafe(formik.touched, field);
  const error = getSafe(formik.errors, field);
  const change = formik.change;
  const [labelWidth, setLabelWidth] = useState(0);
  const InputLabelRef = useRef();
  useEffect(() => {
    setLabelWidth(ReactDOM.findDOMNode(InputLabelRef.current).offsetWidth);
  }, []);

  return (
    <Grid item xs={xs} md={md}>
      <FormControl
        variant="outlined"
        fullWidth
        error={touched && Boolean(error)}>
        <InputLabel htmlFor={field} ref={InputLabelRef}>
          {label}
        </InputLabel>
        <Select
          value={value}
          onChange={change.bind(null, field)}
          input={
            <OutlinedInput labelWidth={labelWidth} name={field} id={field} />
          }>
          {options.map((option, index) => (
            <MenuItem
              value={option.value ? option.value : option}
              key={option + index}>
              {option.label ? option.label : option}
            </MenuItem>
          ))}
        </Select>
        {touched ? (
          <FormHelperText>{touched ? error : ''}</FormHelperText>
        ) : null}
      </FormControl>
    </Grid>
  );
};

export default React.memo(FormSelectField, propsAreEqual);
