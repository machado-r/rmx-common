export default (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      zIndex: '4 !important',
      position: 'fixed',
      bottom: theme.spacing(10),
      // right: theme.spacing.unit * 2,
      right: 0,
    },
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: '5 !important',
  },

  overlay: {
    position: 'fixed',
    /* Hidden by default */
    // display: 'none',
    width: '100%',
    height: '100%',

    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: '4',
    cursor: 'pointer',
  },
});
