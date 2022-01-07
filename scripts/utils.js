const { spawn } = require("child_process");
const { readFileSync } = require("fs");
const YAML = require("yaml");
module.exports = {
  exec: (commands) =>
    new Promise((resolve) => {
      const s = spawn(commands, { stdio: "inherit", shell: true });
      s.on("exit", resolve);
    }),
  openYAML: (path) =>
    YAML.parse(
      readFileSync(path, {
        encoding: "utf8",
      })
    ),
};
