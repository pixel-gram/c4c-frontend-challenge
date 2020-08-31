import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import useStyles from "./FormIconStyle";

function AccountCircleFormIcon() {
  const classes = useStyles();

  return (
    <InputAdornment position="start">
      <AccountCircle className={classes.root} />
    </InputAdornment>
  );
}

export default AccountCircleFormIcon;
