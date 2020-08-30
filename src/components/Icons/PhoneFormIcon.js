import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import InputAdornment from "@material-ui/core/InputAdornment";
import useStyles from "./FormIconStyle";

function PhoneFormIcon() {
  const classes = useStyles();

  return (
    <InputAdornment position="start">
      <PhoneIcon className={classes.root} />
    </InputAdornment>
  );
}

export default PhoneFormIcon;
