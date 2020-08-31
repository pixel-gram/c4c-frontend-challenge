import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    color: `#142B58`,
    fontSize: 16
  }
});

function ExpandMoreIcon() {
  const classes = useStyles();

  return <ExpandMore className={classes.root} />;
}

export default ExpandMoreIcon;
