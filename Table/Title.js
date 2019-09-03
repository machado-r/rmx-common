import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import SearchField from './SearchField';

function Title(props) {
  const { classes, title, text, handleSearch } = props;

  return (
    <div className={classes.titleContainer}>
      <div className={classes.thetitle}>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="caption" className={classes.text}>
          {text}
        </Typography>
      </div>
      <div className={classes.filter}>
        <SearchField handleSearch={handleSearch} />
      </div>
    </div>
  );
}

export default withStyles(styles)(Title);
