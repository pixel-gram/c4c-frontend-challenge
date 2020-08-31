import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import useStyles from "./FormIconStyle";

function EmailFormIcon() {
  const classes = useStyles();

  return (
    <InputAdornment position="start">
      <EmailIcon className={classes.root} />
    </InputAdornment>
  );
}

export default EmailFormIcon;
