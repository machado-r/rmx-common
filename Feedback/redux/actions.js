import React from 'react';
import Close from '../Close';

export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';

export const success = (msg) => {
  const key = new Date().getTime() + Math.random();
  return {
    type: ENQUEUE_SNACKBAR,
    notification: {
      key,
      message: msg,
      options: {
        action: (key) => <Close id={key} />,
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
      },
    },
    key: key || new Date().getTime() + Math.random(),
  };
};

export const error = (msg) => {
  const key = new Date().getTime() + Math.random();
  return {
    type: ENQUEUE_SNACKBAR,
    notification: {
      key,
      message: msg,
      options: {
        action: (key) => <Close id={key} />,
        variant: 'error',
        persist: true,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
      },
    },
    key: key || new Date().getTime() + Math.random(),
  };
};

export const warning = (msg) => {
  const key = new Date().getTime() + Math.random();
  return {
    type: ENQUEUE_SNACKBAR,
    notification: {
      key,
      message: msg,
      options: {
        action: (key) => <Close id={key} />,
        variant: 'warning',
        persist: true,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
      },
    },
    key: key || new Date().getTime() + Math.random(),
  };
};

export const fodeSnackbar = (key) => ({
  type: CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const removeSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  key,
});
