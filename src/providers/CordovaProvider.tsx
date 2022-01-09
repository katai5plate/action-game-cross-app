import { createContext, FC, useCallback, useEffect, useState } from "react";
import useAdmob from "../hooks/useAdmob";
import useAsyncEffect from "../hooks/useAsyncEffect";
import useFirst from "../hooks/useFirst";
import useTime from "../hooks/useTime";

export const CordovaContext = createContext(
  {} as {
    isCordova: boolean;
    currentOrientation: number;
    isDeviceReady: boolean;
    setDeviceReady: React.Dispatch<React.SetStateAction<boolean>>;
    isAdmobReady: boolean;
    setAdmobReady: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

export default (({ children }) => {
  const [isDeviceReady, setDeviceReady] = useState(false);
  const [isAdmobReady, setAdmobReady] = useState(false);
  const [currentOrientation, setCurrentOrientation] = useState(0);

  const onDeviceReady = useCallback(async () => {
    setDeviceReady(true);
    console.log(
      `Running cordova-${window.cordova.platformId}@${window.cordova.version}`
    );
    try {
      await window.admob.start();
      setAdmobReady(true);
    } catch (error) {
      console.warn(error);
    }
  }, []);
  useAsyncEffect(async () => {
    if (!isAdmobReady) return;
    await useAdmob("appOpen", { currentOrientation });
    await useAdmob("banner");
    await new Promise((r) => setTimeout(r, 5000));
    await useAdmob("rewardedInterstitial");
  }, [isAdmobReady]);

  useTime("interval", 1000, () => {
    setCurrentOrientation(window.orientation);
  });
  useFirst(() => {
    document.addEventListener("deviceready", onDeviceReady, false);
  });

  return (
    <CordovaContext.Provider
      value={{
        isCordova: !!window.cordova,
        currentOrientation,
        isDeviceReady,
        setDeviceReady,
        isAdmobReady,
        setAdmobReady,
      }}
    >
      {children}
    </CordovaContext.Provider>
  );
}) as FC;
