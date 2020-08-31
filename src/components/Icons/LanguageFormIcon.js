import React from "react";
import TranslateIcon from "@material-ui/icons/Translate";
import InputAdornment from "@material-ui/core/InputAdornment";
import useStyles from "./FormIconStyle";

function LanguageFormIcon() {
  const classes = useStyles();

  return (
    <InputAdornment position="start">
      <TranslateIcon className={classes.root} />
    </InputAdornment>
  );
}

export default LanguageFormIcon;
