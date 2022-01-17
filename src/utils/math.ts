export interface Vec2 {
  x: number;
  y: number;
}

export interface Transform {
  position: Vec2;
  rotation: number;
  scale: Vec2;
}

export const clacVec2 = (
  op: "+" | "-" | "*" | "/" | "%",
  a: Vec2,
  b: Vec2 | number
): Vec2 => {
  const bb: Vec2 = typeof b === "number" ? { x: b, y: b } : b;
  switch (op) {
    case "+":
      return { x: a.x + bb.x, y: a.y + bb.y };
    case "-":
      return { x: a.x - bb.x, y: a.y - bb.y };
    case "*":
      return { x: a.x * bb.x, y: a.y * bb.y };
    case "/":
      return { x: a.x / bb.x, y: a.y / bb.y };
    case "%":
      return { x: a.x % bb.x, y: a.y % bb.y };
  }
};

export const createVec2 = (x: number, y?: number) => ({
  x,
  y: y === undefined ? x : y,
});

export const pivotToAnchor = (
  pivot: Vec2,
  width: number,
  height: number
): Vec2 => ({ x: pivot.x / width, y: pivot.y / height });

export const anchorToPivot = (
  anchor: Vec2,
  width: number,
  height: number
): Vec2 => ({ x: anchor.x * width, y: anchor.y * height });
