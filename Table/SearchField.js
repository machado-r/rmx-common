/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

const SearchField = (props) => {
  const { classes, handleSearch } = props;
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    e.persist();
    setTerm(e.target.value);
  };

  useEffect(() => {
    handleSearch(term);
  }, [term]);

  return (
    <CssTextField
      label="Pesquisar"
      type="search"
      // variant="outlined"
      fullWidth
      value={term}
      onChange={(e) => handleChange(e)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <FontAwesomeIcon
              icon={faSearch}
              fixedWidth
              className={classes.iconSearch}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default withStyles(styles)(SearchField);

const CssTextField = withStyles({
  root: {
    '& input': {
      color: 'white',
    },
    '& .MuiFormLabel-root': {
      color: 'white',
    },
    '& label': {
      color: 'white',
    },
    '& .MuiInput-underline': {
      borderBottom: '1px solid white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);
