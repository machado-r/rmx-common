import { getSafe, flattenObject } from '_helpers/utils';

export default { desc, stableSort, getSorting, filterData };

function desc(a, b, orderBy) {
  if (!a || !b) return 0;
  return Intl.Collator().compare(getSafe(a, orderBy), getSafe(b, orderBy));
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

function filterData(term, data) {
  return data.filter((obj) => {
    const flat = flattenObject(obj);
    return Object.values(flat).some((val) =>
      val
        ? val
            .toString()
            .toLowerCase()
            .includes(term)
        : false
    );
  });
}
