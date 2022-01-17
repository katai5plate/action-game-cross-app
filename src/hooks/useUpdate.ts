import { useTick } from "@inlet/react-pixi";
import { useState } from "react";

/** frameCount 付きの useTick */
export default (
  tickFn: (tick: {
    deltaTime: number;
    frameCount: number;
    deltaCount: number;
  }) => unknown
) => {
  const [frameCount, setFrameCount] = useState(0);
  const [deltaCount, setDeltaCount] = useState(0);
  useTick((delta) => {
    setFrameCount(frameCount + 1);
    setDeltaCount(deltaCount + 1 * delta);
    tickFn({ deltaTime: delta, frameCount, deltaCount });
  });
};
