import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function DashContainer(props) {
  const { classes, theme } = props;
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const renderMobile = () => (
    <>
      {open ? (
        <Fade in={open}>
          <div className={classes.overlay} onClick={() => setOpen(!open)}>
            <Slide direction="left" in={open} mountOnEnter unmountOnExit>
              <div className={classes.container} onClick={() => setOpen(!open)}>
                {props.children}
              </div>
            </Slide>
          </div>
        </Fade>
      ) : null}

      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={() => setOpen(!open)}>
        <FontAwesomeIcon
          icon={faTools}
          // className={classes.pullLeft}
          fixedWidth
          size="lg"
        />
      </Fab>
    </>
  );

  const renderDesktop = () => (
    <div className={classes.container}>{props.children}</div>
  );

  if (matches) {
    return renderMobile();
  } else {
    return renderDesktop();
  }
}

export default withStyles(styles, { withTheme: true })(DashContainer);
