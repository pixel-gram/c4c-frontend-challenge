import React, { useContext } from "react";
import Button from "./components/Button";
import Container from "./components/Form/Cotainer";
import Header from "./components/Header";
import Message from "./components/Message";
import PageName from "./components/PageName";
import FormContext from "./contexts/Form";

function App() {
  const context = useContext(FormContext.Context);

  const renderReferralList = () => {
    const referralIteration = Array(context.numReferral).fill();

    return referralIteration.map((_, index) => {
      return <Container key={index} referral={context.referral[index]} index={index + 1} />;
    });
  };

  return (
    <div className="body-wrapper">
      <PageName />

      {context.isSuccess && <Message />}

      <main className="container">
        <Header />
        <form style={{ width: "100%" }} onSubmit={event => context.onSubmitReferralList(event)}>
          {renderReferralList()}

          <div className="button-container">
            <button className="button-add-patient" onClick={event => context.onClickAddReferal(event)}>
              + ADD ANOTHER PATIENT
            </button>
            <Button className="button-send" description="SEND REFERRALS" type="submit" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
