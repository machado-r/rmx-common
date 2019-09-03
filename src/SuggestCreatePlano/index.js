import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';

function SugestCreatePlano(props) {
  const { classes, text } = props;
  return (
    <Paper className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h5" gutterBottom>
          Ops, parece que você não tem nenhum plano ativo ou cadastrado.
        </Typography>
        <Typography variant="caption">
          Para {text}, é necessário ter pelo menos um plano ativo.
        </Typography>
        <Link
          to="/planos"
          component={RouterLink}
          underline="none"
          className={classes.button}>
          <Button size="large" color="primary" variant="contained" fullWidth>
            <FontAwesomeIcon
              icon={faGem}
              className={classes.pullLeft}
              fixedWidth
              size="lg"
            />
            Criar plano
          </Button>
        </Link>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(SugestCreatePlano);
