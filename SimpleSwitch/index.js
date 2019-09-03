import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

function SwitchLabels(props) {
  const { label, field, value, disabled, classes, action, color } = props;

  return (
    <div className={classes.switch}>
      <FormControlLabel
        id={field}
        label={label}
        disabled={disabled}
        control={
          <Switch
            checked={value}
            onChange={() => action()}
            value={value}
            color={color}
          />
        }
      />
    </div>
  );
}

export default withStyles(styles)(SwitchLabels);
