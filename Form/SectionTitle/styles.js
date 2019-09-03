export default (theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: '0.5em',
    paddingLeft: theme.spacing(3),
    margin: 'auto',
    marginBottom: '-0.6em',
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: '4px',
    boxShadow:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(193, 0, 99,.4)',
  },

  title: {
    color: 'white',
    fontSize: '1.1em',
    width: '100%',
  },
});
