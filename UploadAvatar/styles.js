export default (theme) => ({
  card: {
    // maxWidth: 240,
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: 300,
    },
    margin: theme.spacing(1),
    // flex: '0 0 auto',
  },

  actions: {
    display: 'flex',
    flexDirection: 'column',
  },

  actionBtn: {
    width: '100%',
  },

  pullLeft: {
    position: 'absolute',
    left: theme.spacing(2),
  },

  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    color: 'grey',
  },

  actionText: { marginTop: '1em' },

  error: {
    color: 'red',
    margin: theme.spacing(1),
  },

  success: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
});
