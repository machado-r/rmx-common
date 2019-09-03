export default (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    height: '90px',
    marginRight: '1em',
    marginBottom: '1em',
    [theme.breakpoints.down('sm')]: {
      width: '230px',
      height: '75px',
    },
  },

  top: {
    display: 'flex',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      // display: 'flex',
    },
  },

  icon: {
    width: '40px',
    height: '40px',
    position: 'relative',
    zIndex: '3 !important',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '0.7em',
    top: '-1em',
    margin: '0.5em',
    // marginBottom: '-4em',
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: '4px',
    boxShadow:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(193, 0, 99,.4)',
    [theme.breakpoints.down('sm')]: {
      top: '0.3em',
      left: '-3em',
      margin: '0.5em',
      marginBottom: '-2em',
    },
  },

  infoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-3em',
      paddingTop: theme.spacing(1),
      flexDirection: 'row',
      alignContent: 'center',
    },
  },

  data: {
    lineHeight: '1em',
    fontWeight: 'bold',
    fontSize: '1.4em',
    marginRight: '0.2em',
  },

  info: {
    lineHeight: '1em',
    fontSize: '1em',
  },

  action: {
    flex: 1,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    // [theme.breakpoints.down('sm')]: {
    //   marginTop: '-0.5em',
    // },
  },

  button: {
    alignSelf: 'flex-end',
    // marginRight: theme.spacing.unit,
    // marginLeft: theme.spacing.unit,
  },
});
