import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

function Footer(props) {
  const {
    data,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    classes,
  } = props;
  return (
    <TablePagination
      classes={{
        toolbar: classes.toolbar,
        actions: classes.actions,
        caption: classes.caption,
        select: classes.select,
      }}
      labelRowsPerPage="Linhas por página:"
      labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
      rowsPerPageOptions={[15, 25, 50, 100]}
      component="div"
      count={data.length}
      rowsPerPage={rowsPerPage}
      page={page}
      backIconButtonProps={{
        'aria-label': 'Anterior',
      }}
      nextIconButtonProps={{
        'aria-label': 'Próximo',
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
}

export default withStyles(styles)(Footer);
