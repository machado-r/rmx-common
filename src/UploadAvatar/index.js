import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import Dropzone from 'react-dropzone';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

function UploadAvatar(props) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { label, field, xs, md, disabled, classes, formik } = props;

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      formik.setFieldTouched(field, true, false);
      formik.setFieldValue(field, file);
      setError(false);
      setSuccess(true);
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <Grid item xs={xs} md={md}>
      <Dropzone
        onDrop={onDrop}
        accept="image/jpeg, image/png"
        maxSize={10500000}
        multiple={false}
        noDrag
        disabled={disabled}>
        {({ getRootProps, getInputProps, isDragReject }) => (
          <div className={classes.actionBtn} {...getRootProps()}>
            <input {...getInputProps()} />
            <Button
              color={success ? 'initial' : 'primary'}
              variant="contained"
              size="large"
              fullWidth
              disabled={disabled}>
              <FontAwesomeIcon
                icon={faUpload}
                className={classes.pullLeft}
                fixedWidth
                size="lg"
              />
              {label}
            </Button>
          </div>
        )}
      </Dropzone>
      {error ? (
        <Typography variant="body2" className={classes.error}>
          O arquivo selecionado não é aceito. Envie apenas JPEG, JPG ou PNG. O
          tamanho máximo é 10Mb.
        </Typography>
      ) : null}
      {success ? (
        <Typography variant="body1" color="primary" className={classes.success}>
          Avatar selecionado.
        </Typography>
      ) : null}
    </Grid>
  );
}

export default withStyles(styles)(UploadAvatar);
