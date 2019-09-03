import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSnackbar } from 'notistack';

const CloseSnackbar = (props) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <FontAwesomeIcon
      icon={faTimes}
      onClick={() => closeSnackbar(props.id)}
      fixedWidth
      style={{
        cursor: 'pointer',
      }}
      size="lg"
    />
  );
};

export default CloseSnackbar;
