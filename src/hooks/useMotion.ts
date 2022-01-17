import { ComponentProps, useReducer, ComponentType, Dispatch } from "react";

/** 毎フレーム更新可能な Props を作成する
 * ```js
 * const [motion, setMotion] = useMotion<typeof Sprite>({ x: 0, y: 0 });
 * useUpdate(({ deltaCount }) => {
 *   const i = deltaCount * 0.05;
 *   setMotion({ x: Math.sin(i) * 100 })
 * });
 * <Sprite image={logo} {...motion} />
 * ```
 */
export default <C extends ComponentType, Props = ComponentProps<C>>(
  initProps: Props
): [Props, Dispatch<Props>] =>
  useReducer((_: unknown, data: Props) => data, initProps as Props);
