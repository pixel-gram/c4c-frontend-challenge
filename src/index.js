import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/Global.css";
import FormContext from "./contexts/Form";

ReactDOM.render(
  <FormContext.Provider>
    <App />
  </FormContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
