/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import Title from './Title';
import Body from './Body';
import Footer from './Footer';
import utils from './utils';

function SimpleTable(props) {
  const { classes, header, data, title, text, action } = props;

  useEffect(() => {
    handleSearch();
  }, [data]);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [filteredData, setFilteredData] = useState(data);

  function handleSearch(search) {
    if (search && search.length !== 0) {
      setFilteredData(utils.filterData(search.toLowerCase(), data));
    } else {
      setFilteredData(data);
    }
  }

  function handleChangePage(event, page) {
    setPage(page);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  return (
    <Paper className={classes.root}>
      <Title title={title} text={text} handleSearch={handleSearch} />
      <div className={classes.tableWrapper}>
        <Body
          title={title}
          text={text}
          data={filteredData}
          header={header}
          page={page}
          rowsPerPage={rowsPerPage}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          action={action}
        />
      </div>
      <Footer
        data={filteredData}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default withStyles(styles)(SimpleTable);
