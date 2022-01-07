import { Stage, Container, Sprite, Text } from "@inlet/react-pixi";
import logo from "./img/logo.png";

const {
  engine: { width, height, resize },
} = window.WEBPACK_VARIABLES;

export default () => (
  <Stage
    id="main-screen"
    className={`resize-${resize}`}
    width={width}
    height={height}
    options={{ backgroundColor: 0xffaa00 }}
  >
    <Sprite image={logo} x={100} y={100} />
    <Container x={100}>
      <Text text="Hello World" />
    </Container>
  </Stage>
);
