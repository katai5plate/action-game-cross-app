import useFirst from "./useFirst";

/** 時間経過または一定時間毎に実行される関数 */
export default function (
  mode: "interval" | "timeout",
  ms: number,
  fn: () => any
) {
  useFirst(() => (mode === "interval" ? setInterval : setTimeout)(fn, ms));
}
