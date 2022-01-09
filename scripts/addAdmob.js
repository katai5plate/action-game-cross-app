const { exec } = require("./utils");
const { parse } = require("yaml");
const {
  environment: { admob },
} = parse(
  require("fs").readFileSync("./project.config.yml", {
    encoding: "utf8",
  })
);
admob.enable
  ? (async () => {
      const appId = admob["app-id"];
      await exec(
        `npx cordova plugin add admob-plus-cordova --save --variable APP_ID_ANDROID=${appId}`
      );
      console.log(
        "Admob をインストールしました: ",
        appId.slice(-5),
        "(アプリ ID 下 5 桁)"
      );
    })()
  : console.log(
      "Admob はインストールしませんでした。インストールする場合は project.config.yml にて environment.admob.enable を true にしてください。"
    );
