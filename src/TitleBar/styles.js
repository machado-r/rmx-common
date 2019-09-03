export default (theme) => ({
  titleContainer: {
    position: 'relative',
    zIndex: '3 !important',
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    top: '-2em',
    margin: '1em',
    marginBottom: '0',
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: '4px',
    boxShadow:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(193, 0, 99,.4)',
  },

  title: {
    color: 'white',
  },

  text: {
    color: 'white',
  },
});
