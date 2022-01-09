require("./env");
const { exec, openYAML } = require("./utils");

const arg = process.argv.slice(2)[0];
const scripts = openYAML("./scripts.yml");

(async () => {
  if (!arg) {
    return Object.entries(scripts).forEach(([key, { help, alias }]) => {
      console.log(`${help}\n> npm start ${key}\n`);
      console.log(`${help}\n> npm start ${alias}\n`);
    });
  }
  for (let command of scripts[
    Object.entries(scripts).find(([k, v]) => arg === k || arg === v.alias)[0]
  ].commands) {
    await exec(command);
  }
})();
