export default (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    maxWidth: '100%',
  },
});
