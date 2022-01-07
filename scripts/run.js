const { exec, openYAML } = require("./utils");

const arg = process.argv.slice(2)[0];
const scripts = openYAML("./scripts.yml");

(async () => {
  if (!arg) {
    return Object.entries(scripts).forEach(([key, { help }]) => {
      console.log(`${help}\n> npm start ${key}\n`);
    });
  }
  for (let command of scripts[arg].commands) {
    await exec(command);
  }
})();
