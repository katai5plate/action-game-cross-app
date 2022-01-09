import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./libs/reportWebVitals";

import "./css/index.css";
import "./types/globals";

import CordovaProvider from "./providers/CordovaProvider";

function start() {
  const { title } = window.WEBPACK_VARIABLES.meta;

  document.title = title;

  ReactDOM.render(
    <React.StrictMode>
      <CordovaProvider>
        <App />
      </CordovaProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

(async () => {
  try {
    const res = await fetch("./cordova.js");
    if (res.status === 404) throw new Error();
    eval(await res.text());
  } catch {}
  start();
})();
