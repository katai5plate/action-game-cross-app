import { Stage, Container, Sprite, Text } from "@inlet/react-pixi";
import { useContext, useEffect, useState } from "react";
import logo from "./img/logo.png";
import { CordovaContext } from "./providers/CordovaProvider";

const {
  engine: { width, height, resize },
} = window.WEBPACK_VARIABLES;

export default () => {
  const { isCordova, isAdmobReady, currentOrientation } =
    useContext(CordovaContext);
  return (
    <Stage
      id="main-screen"
      className={`resize-${resize}`}
      width={width}
      height={height}
      options={{ backgroundColor: 0xffaa00 }}
    >
      <Sprite image={logo} x={100} y={100} />
      <Container x={100}>
        <Text
          text={isCordova ? (!isAdmobReady ? "CRDV" : "AD-OK") : "Hello, WEB!"}
        />
      </Container>
      <Text text={"" + currentOrientation} x={width / 2} y={height / 2} />
    </Stage>
  );
};
