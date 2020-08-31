import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import Detail from "./Detail";
import Summary from "./Summary";

const Accordion = withStyles({
  root: {
    borderRadius: 4,
    boxShadow: "none",
    marginBottom: "8px !important",
    marginTop: "8px !important",

    "&:before": {
      backgroundColor: "rgba(0, 0, 0, 0)"
    },

    "&$expanded": {
      border: "none",
      margin: 0
    }
  }
})(MuiAccordion);

function Container(props) {
  const { referral, index } = props;

  return (
    <Accordion>
      <Summary firstName={referral?.firstName} lastName={referral?.lastName} index={index} />
      <Detail referral={referral} />
    </Accordion>
  );
}

export default Container;
