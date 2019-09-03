import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const HorizontalScroll = (props) => {
  return <div className={props.classes.container}>{props.children}</div>;
};

export default withStyles(styles)(HorizontalScroll);
