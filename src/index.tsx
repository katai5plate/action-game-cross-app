import React from "react";
import ReactDOM from "react-dom";
import * as PIXI from "pixi.js";

import App from "./App";
import reportWebVitals from "./libs/reportWebVitals";

import "./css/index.css";
import "./types/globals";

import CordovaProvider from "./providers/CordovaProvider";
import { AppProvider as PixiProvider, Stage } from "@inlet/react-pixi";
import InputProvider from "./providers/InputProvider";

function start() {
  const {
    engine: { width, height, resize },
    meta: { title },
  } = window.WEBPACK_VARIABLES;

  document.title = title;

  ReactDOM.render(
    <React.StrictMode>
      <CordovaProvider>
        <InputProvider>
          <PixiProvider value={new PIXI.Application()}>
            <Stage
              id="main-screen"
              className={`resize-${resize}`}
              width={width}
              height={height}
              options={{ backgroundColor: 0xffaa00 }}
            >
              <App />
            </Stage>
          </PixiProvider>
        </InputProvider>
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
