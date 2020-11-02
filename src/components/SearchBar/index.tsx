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


type Props = {
  handleInput: any;
}

const SearchBar: React.FC<Props> = ({
  handleInput
}) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-search"
        label="Employee Search"
        name="search"
        variant="outlined"
        color="secondary"
        onChange={handleInput}
      />
    </form>
  );
}

export default SearchBar;