import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styles from './styles';
import util from './utils';
import Head from './Head';
import { formataData, getSafe } from '_helpers/utils';

function Body(props) {
  const {
    classes,
    data,
    header,
    page,
    rowsPerPage,
    order,
    orderBy,
    onRequestSort,
  } = props;

  const mapCells = (row) => {
    return header.map((elem, index) => {
      let value = getSafe(row, elem.id);

      const wrap = elem.wrap ? 'normal' : 'nowrap';
      const align = elem.center ? 'center' : 'left';

      if (value) {
        if (value.toString() === 'true') {
          value = elem.true;
        }
        if (typeof value === 'object') {
          let objVal = value.titulo || value.nome || value.validade;
          if (value.validade && !value.titulo && !value.nome) {
            objVal = formataData(objVal);
          }
          if (elem.type === 'date') {
            objVal = formataData(objVal);
          }
          return (
            <TableCell
              align={align}
              style={{ whiteSpace: wrap }}
              key={`${index}${objVal}`}>
              {objVal}
            </TableCell>
          );
        } else {
          if (elem.type === 'date') {
            value = formataData(value);
          }
          return (
            <TableCell
              align={align}
              style={{ whiteSpace: wrap }}
              key={`${index}${value}`}>
              {value}
            </TableCell>
          );
        }
      } else {
        if (elem.false) {
          return (
            <TableCell
              align={align}
              style={{ whiteSpace: wrap }}
              key={`${index}${elem.false}`}>
              {elem.false}
            </TableCell>
          );
        } else {
          return (
            <TableCell align={align} style={{ whiteSpace: wrap }} key={index}>
              {null}
            </TableCell>
          );
        }
      }
    });
  };

  const mapRows = () => {
    return util
      .stableSort(data, util.getSorting(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        const line = page * rowsPerPage + index + 1;
        return (
          <TableRow
            key={`tr${index}`}
            onClick={() => props.action(row)}
            className={classes.row}>
            <TableCell style={{ whiteSpace: 'nowrap' }}>{line}</TableCell>
            {mapCells(row)}
          </TableRow>
        );
      });
  };

  return (
    <Table size="medium">
      <Head
        header={header}
        order={order}
        orderBy={orderBy}
        onRequestSort={onRequestSort}
      />
      <TableBody>{mapRows()}</TableBody>
    </Table>
  );
}

export default withStyles(styles)(Body);
