import React, { Component, createContext } from "react";
import axios from "axios";

const Context = createContext({});

class FormProvider extends Component {
  state = {
    address: "",
    birthDate: "",
    eMail: "",
    firstName: "",
    isSuccess: false,
    language: "",
    lastName: "",
    note: "",
    numReferral: 1,
    phone: "",
    referral: []
  };

  setStateValue = (name, value) => {
    this.setState({ [name]: value });
  };

  removeReferral = index => {
    const newReferral = [...this.state.referral];

    newReferral.splice(index, 1);

    this.setState({ referral: newReferral });
  };

  onClickAddReferal = event => {
    event.preventDefault();

    const { address, birthDate, eMail, firstName, language, lastName, note, phone, numReferral } = this.state;

    if (numReferral > 4) {
      alert("cannot add referral over 5");
    } else {
      if (birthDate && eMail && firstName && language && lastName && phone) {
        this.setState({
          numReferral: numReferral + 1,
          referral: [...this.state.referral, { firstName, lastName, birthDate, language, phone, eMail, address, note }]
        });

        if (this.state.referral.length <= 5) {
          this.setState({
            address: "",
            birthDate: "",
            eMail: "",
            firstName: "",
            isSuccess: false,
            language: "",
            lastName: "",
            note: "",
            phone: ""
          });
        }
      } else {
        alert("please fill the form");
      }
    }
  };

  onSubmitReferralList = async event => {
    event.preventDefault();

    if (this.state.referral.length > 0) {
      axios
        .post("url", { referral: this.state.referral })
        .then(response => {
          if (response.status === 200) {
            this.setState({ referral: [], isSuccess: true });
          }
        })
        .catch(error => alert(error));
    } else {
      alert("cannot submit without referral");
    }
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onClickAddReferal: this.onClickAddReferal,
          onSubmitReferralList: this.onSubmitReferralList,
          setStateValue: this.setStateValue
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default {
  Consumer: Context.Consumer,
  Context,
  Provider: FormProvider
};
