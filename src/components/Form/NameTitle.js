import React from "react";

function NameTitle(props) {
  const { firstName, lastName, number, selected } = props;
  const title = firstName && lastName ? `${firstName} ${lastName}` : "New Referral";

  let numberClass = "";

  switch (number) {
    case 2:
      numberClass = "number2";
      break;

    case 3:
      numberClass = "number3";
      break;

    case 4:
      numberClass = "number4";
      break;

    case 5:
      numberClass = "number5";
      break;

    default:
      numberClass = "number1";
      break;
  }

  return (
    <>
      <span className={`number-container${selected ? " expended" : ""} ${numberClass}`}>{number}</span>
      <div>
        <span className={firstName && lastName ? "form-summary-new-referral-exist" : "form-summary-new-referral"}>{title}</span>
      </div>
    </>
  );
}

export default NameTitle;
