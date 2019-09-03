export default (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    margin: 'auto',
    display: 'flex',
    marginBottom: '2em',

    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '30%',
    },
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
  },

  button: {
    marginTop: '1em',
    justifyContent: 'space-between',
  },

  pullLeft: {
    position: 'absolute',
    left: theme.spacing(2),
  },
});
