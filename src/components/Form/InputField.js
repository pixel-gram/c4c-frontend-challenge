import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import MuiFormControl from "@material-ui/core/FormControl";
import MuiInput from "@material-ui/core/Input";
import MuiInputLabel from "@material-ui/core/InputLabel";

const FormControl = withStyles({
  root: {
    display: "flex",
    paddingLeft: 0,
    width: "100%"
  }
})(MuiFormControl);

const InputLabel = withStyles({
  root: {
    color: "#3A719B",
    fontFamily: `"Montserrat", sans-serif`,

    "&$focused": {
      color: "#3A719B"
    }
  }
})(MuiInputLabel);

const Input = withStyles({
  underline: {
    "&:before": {
      borderBottom: "1px solid #3A719B"
    },
    "&:after": {
      borderBottom: "1px solid #25a575"
    },
    "&:hover": {
      "&&&&:hover:before": {
        borderBottom: "1px solid #25a575"
      }
    }
  }
})(MuiInput);

function InputField(props) {
  const { helperText, icon, label, required, getInputProps, onChange, value } = props;

  return (
    <div className="form-input-field-grid">
      {icon}
      <FormControl>
        <InputLabel htmlFor="component-helper">
          {label}
          {required && <span className="form-input-field-required">*</span>}
        </InputLabel>
        <Input
          id="component-helper"
          aria-describedby="component-helper-text"
          disableUnderline={true}
          onChange={onChange}
          value={value}
          {...(getInputProps
            ? {
                ...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input"
                })
              }
            : null)}
        />
        <FormHelperText id="component-helper-text">{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
}
export default InputField;
