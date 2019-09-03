import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import styles from './styles';

function Head(props) {
  const { classes, header, onRequestSort, orderBy, order } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const mapHeader = () => {
    return header.map((row) => {
      const align = row.center ? 'center' : 'left';
      return (
        <TableCell
          key={row.id}
          align={align}
          sortDirection={orderBy === row.id ? order : false}>
          <TableSortLabel
            align={align}
            active={orderBy === row.id}
            direction={order}
            onClick={createSortHandler(row.id)}>
            <span className={classes.headLabel}>{row.label}</span>
          </TableSortLabel>
        </TableCell>
      );
    });
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        {mapHeader()}
      </TableRow>
    </TableHead>
  );
}

export default withStyles(styles)(Head);
