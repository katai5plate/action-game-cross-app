import { useEffect } from "react";

export default function (
  fn: () => Promise<any>,
  deps: React.DependencyList | undefined
) {
  useEffect(() => {
    (async () => {
      await fn();
    })();
  }, deps);
}
