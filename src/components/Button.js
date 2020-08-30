import React from "react";

function Button(props) {
  const { className, description, onClick, type } = props;

  return (
    <button className={className} onClick={onClick} type={type}>
      {description}
    </button>
  );
}

export default Button;
