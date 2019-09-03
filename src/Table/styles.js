export default (theme) => ({
  tableWrapper: {
    overflowX: 'auto',
    maxWidth: 'calc(100vw - 100px)',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'calc(100vw - 73px)',
    },
  },

  root: {
    marginTop: '1em',
    marginBottom: '4em',
  },

  titleContainer: {
    position: 'relative',
    zIndex: '3 !important',
    display: 'flex',
    // flexDirection: 'column',
    padding: '1em',
    top: '-1em',
    margin: '1em',
    marginBottom: '0',
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: '4px',
    boxShadow:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(193, 0, 99,.4)',
  },

  thetitle: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
  },

  filter: {
    color: 'white',
    display: 'flex',
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },

  iconSearch: {
    color: 'white',
  },

  title: {
    color: 'white',
  },

  text: {
    color: 'white',
  },

  headLabel: {
    color: 'black',
  },

  row: {
    '&:hover': {
      background: 'lightgrey',
      cursor: 'pointer',
    },
  },

  [theme.breakpoints.down('sm')]: {
    toolbar: {
      display: 'flex',
      // flexDirection: 'column',
      flexWrap: 'wrap',
      maxWidth: 'calc(100vw - 73px)',
      height: 'inherit',
      justifyContent: 'flex-end',
      textAlign: 'right',
    },

    caption: {
      flexBasis: '40%',
      textAlign: 'right',
    },
    actions: {
      flexBasis: '40%',
      padding: 0,
      margin: 0,
      textAlign: 'right',
    },
    select: {
      flexBasis: '40%',
      textAlign: 'center',
    },

    titleContainer: {
      flexDirection: 'column',
    },

    thetitle: {
      flex: 1,
    },

    filter: {
      marginTop: '0.5em',
      alignSelf: 'unset',
    },

    text: {
      display: 'none',
    },
  },
});
