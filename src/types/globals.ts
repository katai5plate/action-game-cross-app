import { AdMob } from "admob-plus-cordova";

declare global {
  interface Window {
    cordova: any;
    admob: AdMob;
    WEBPACK_VARIABLES: {
      meta: {
        title: string;
      };
      engine: {
        width: number;
        height: number;
        resize: "width" | "height" | "fit" | "none";
      };
      environment: {
        admob: {
          appOpen: string;
          banner: string;
          interstitial: string;
          rewarded: string;
          rewardedInterstitial: string;
        };
      };
    };
  }
}

export {};
