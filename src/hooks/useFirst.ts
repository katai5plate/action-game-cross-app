import { useEffect } from "react";

/** 最初だけ実行される関数 */
export default function (fn: () => any) {
  useEffect(fn, []);
}
