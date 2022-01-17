import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import useFirst from "../hooks/useFirst";

export const InputContext = createContext(
  {} as {
    keyState: { [key: string]: boolean };
  }
);

export default (({ children }) => {
  const [keyState, setKeyState] = useState({});
  const handle = useCallback((e: KeyboardEvent) => {
    setKeyState({
      ...keyState,
      [e.key]: e.type === "keydown",
    });
  }, []);
  useEffect(() => {
    console.log(keyState);
  }, [keyState]);
  useFirst(() => {
    addEventListener("keyup", handle);
    addEventListener("keydown", handle);
  });

  return (
    <InputContext.Provider value={{ keyState }}>
      {children}
    </InputContext.Provider>
  );
}) as FC;
