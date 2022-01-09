const { admob: a } = window.WEBPACK_VARIABLES.environment;

/** 広告を呼び出す。
 *
 * ```js
 * const {isAdmobReady, currentOrientation} = useContext(CordovaContext);
 * useAsyncEffect(async () => {
     if (!isAdmobReady) return;
 *   await useAdmob("appOpen", { currentOrientation });
 *   await useAdmob("banner");
 *   await useAdmob("interstitial");
 *   await useAdmob("rewarded", { onReward: () => {} });
 *   await useAdmob("rewardedInterstitial", { onReward: () => {} });
 * }, [isAdmobReady]);
 * ```
 */
export default async function (
  type:
    | "appOpen"
    | "banner"
    | "interstitial"
    | "rewarded"
    | "rewardedInterstitial",
  option?: {
    currentOrientation?: number;
    onReward?: () => any;
  }
) {
  const { currentOrientation } = option || {};
  const orientation =
    currentOrientation === 180
      ? 2
      : currentOrientation === -90
      ? 3
      : currentOrientation === 90
      ? 4
      : 1;
  switch (type) {
    case "appOpen":
      const aa = new window.admob.AppOpenAd({
        adUnitId: a.appOpen,
        orientation,
      });
      await aa.load();
      await aa.show();
      return;
    case "banner":
      const ab = new window.admob.BannerAd({ adUnitId: a.banner });
      await ab.load();
      await ab.show();
      return;
    case "interstitial":
      const ai = new window.admob.InterstitialAd({ adUnitId: a.interstitial });
      await ai.load();
      await ai.show();
      return;
    case "rewarded":
      const ar = new window.admob.RewardedAd({ adUnitId: a.rewarded });
      ar.on("reward", option?.onReward || (() => console.log("GET!")));
      await ar.load();
      await ar.show();
      return;
    case "rewardedInterstitial":
      const ri = new window.admob.RewardedInterstitialAd({
        adUnitId: a.rewardedInterstitial,
      });
      ri.on("reward", option?.onReward || (() => console.log("GET!")));
      await ri.load();
      await ri.show();
      return;
  }
}
