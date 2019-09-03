import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

const SelectField = (props) => {
  const { label, field, value, onChange, xs, md, sm, options } = props;

  const [labelWidth, setLabelWidth] = useState(0);
  const InputLabelRef = useRef();
  useEffect(() => {
    setLabelWidth(ReactDOM.findDOMNode(InputLabelRef.current).offsetWidth);
  }, []);

  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor={field} ref={InputLabelRef}>
          {label}
        </InputLabel>
        <Select
          value={value}
          onChange={onChange}
          input={
            <OutlinedInput labelWidth={labelWidth} name={field} id={field} />
          }>
          {options.map((option) => (
            <MenuItem value={option.value ? option.value : option} key={option}>
              {option.label ? option.label : option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectField;
