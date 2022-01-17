import { Sprite, Text, useTick } from "@inlet/react-pixi";
import { useContext } from "react";
import UILayer from "./components/layers/UILayer";
import WorldLayer from "./components/layers/WorldLayer";
import useMotion from "./hooks/useMotion";
import useUpdate from "./hooks/useUpdate";
import logo from "./img/logo.png";
import { CordovaContext } from "./providers/CordovaProvider";

const {
  engine: { width, height },
} = window.WEBPACK_VARIABLES;

let i = 0;

export default () => {
  const { isCordova, isAdmobReady, currentOrientation } =
    useContext(CordovaContext);
  const [props, setProps] = useMotion<typeof Sprite>({ x: 0, y: 0 });
  useUpdate(({ deltaCount }) => {
    const i = deltaCount * 0.05;
    setProps({
      x: Math.sin(i) * 100,
      y: Math.sin(i / 2) * 100,
    });
  });
  return (
    <>
      <WorldLayer>
        <Sprite image={logo} {...props} />
      </WorldLayer>
      <UILayer>
        <Text
          text={isCordova ? (!isAdmobReady ? "CRDV" : "AD-OK") : "Hello, WEB!"}
        />
        <Text text={"" + currentOrientation} x={width / 2} y={height / 2} />
      </UILayer>
    </>
  );
};
