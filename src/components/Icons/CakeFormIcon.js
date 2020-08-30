import React from "react";
import CakeIcon from "@material-ui/icons/Cake";
import InputAdornment from "@material-ui/core/InputAdornment";
import useStyles from "./FormIconStyle";

function CakeFormIcon() {
  const classes = useStyles();

  return (
    <InputAdornment position="start">
      <CakeIcon className={classes.root} />
    </InputAdornment>
  );
}

export default CakeFormIcon;
