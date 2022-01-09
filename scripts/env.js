const { parse } = require("yaml");
const { environment: env } = parse(
  require("fs").readFileSync("./project.config.yml", {
    encoding: "utf8",
  })
);

if (env) {
  const { path, version } = env["android-sdk"];
  process.env.ANDROID_SDK_ROOT = path;
  process.env.ANDROID_HOME = path;
  process.env.path +=
    ";" +
    ["tools", "platform-tools"]
      .map((x) => `${path}${require("path").sep}${x}`)
      .join(";");
  process.env.ORG_GRADLE_PROJECT_cdvBuildToolsVersion = version;
}
