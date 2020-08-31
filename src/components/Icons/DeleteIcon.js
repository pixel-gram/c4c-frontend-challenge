import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Delete from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    color: `#142B58`,
    fontSize: 16
  }
});

function DeleteIcon() {
  const classes = useStyles();

  return <Delete className={classes.root} />;
}

export default DeleteIcon;
