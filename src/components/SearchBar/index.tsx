import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '80ch',
        align: 'center',
      },
    },
  }),
);

export default function ColorTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-secondary"
        label="Employee Search"
        variant="outlined"
        color="secondary"
      />
    </form>
  );
}
