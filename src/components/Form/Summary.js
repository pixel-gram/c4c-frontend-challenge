import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import DeleteIcon from "../Icons/DeleteIcon";
import ExpandMoreIcon from "../Icons/ExpandMoreIcon";
import NameTitle from "./NameTitle";
import FormContext from "../../contexts/Form";

const AccordionSummary = withStyles({
  root: {
    paddingLeft: 0
  },
  content: {
    display: "block",
    margin: 0,

    "&$expanded": {
      margin: 0
    }
  },
  expanded: {}
})(MuiAccordionSummary);

function Summary(props) {
  const context = useContext(FormContext.Context);
  const { firstName, lastName, index } = props;
  const classes = withStyles();
  const [selected, setSelected] = useState(false);

  return (
    <AccordionSummary
      aria-controls="panel1a-content"
      className={classes.root}
      expandIcon={<ExpandMoreIcon />}
      id="panel1a-header"
      onClick={() => setSelected(!selected)}
    >
      <div className="form-summary-container">
        <div className="form-summary-title-container">
          <NameTitle firstName={firstName} lastName={lastName} number={index} selected={selected} />
        </div>
        <div className="form-summary-trash-can">
          <DeleteIcon onClick={() => context.removeReferral(index)} />
        </div>
      </div>
    </AccordionSummary>
  );
}

export default Summary;
