import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import AddressInputField from "./AddressInputField";
import Grid from "@material-ui/core/Grid";
import InputField from "./InputField";
import LanguageFormIcon from "../Icons/LanguageFormIcon";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AccountCircleFormIcon from "../Icons/AccountCircleFormIcon";
import CakeFormIcon from "../Icons/CakeFormIcon";
import EmailFormIcon from "../Icons/EmailFormIcon";
import PhoneFormIcon from "../Icons/PhoneFormIcon";
import FormContext from "../../contexts/Form";

const AccordionDetails = withStyles({
  root: {
    paddingBottom: 22,
    paddingLeft: 56,
    paddingRight: 56
  }
})(MuiAccordionDetails);

function Detail(props) {
  const { referral } = props;

  const context = useContext(FormContext.Context);

  return (
    <AccordionDetails>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputField
            icon={<AccountCircleFormIcon />}
            label="First Name"
            onChange={event => context.setStateValue("firstName", event.target.value)}
            required={true}
            value={referral ? referral?.firstName : context.firstName}
          />
        </Grid>

        <Grid item xs={6}>
          <InputField
            label="Last Name"
            onChange={event => context.setStateValue("lastName", event.target.value)}
            required={true}
            icon={<AccountCircleFormIcon />}
            value={referral ? referral?.lastName : context.lastName}
          />
        </Grid>

        <Grid item xs={6}>
          <InputField
            label="Date of Birth"
            onChange={event => context.setStateValue("birthDate", event.target.value)}
            required={true}
            icon={<CakeFormIcon />}
            value={referral ? referral?.birthDate : context.birthDate}
          />
        </Grid>

        <Grid item xs={6}>
          <InputField
            label="Contact Language"
            onChange={event => context.setStateValue("language", event.target.value)}
            required={true}
            icon={<LanguageFormIcon />}
            value={referral ? referral?.language : context.language}
          />
        </Grid>

        <Grid item xs={6}>
          <InputField
            label="Phone"
            required={true}
            onChange={event => context.setStateValue("phone", event.target.value)}
            icon={<PhoneFormIcon />}
            value={referral ? referral?.phone : context.phone}
          />
        </Grid>

        <Grid item xs={6}>
          <InputField
            label="Email"
            onChange={event => context.setStateValue("eMail", event.target.value)}
            required={true}
            icon={<EmailFormIcon />}
            value={referral ? referral?.eMail : context.eMail}
          />
        </Grid>

        {window.google && (
          <Grid className="form-detail-address-container" item xs={12}>
            <AddressInputField value={referral?.address} />
          </Grid>
        )}

        <Grid item xs={12}>
          <InputField
            label="Notes/Reason"
            onChange={event => context.setStateValue("note", event.target.value)}
            value={referral ? referral?.note : context.note}
          />
        </Grid>
      </Grid>
    </AccordionDetails>
  );
}

export default Detail;
