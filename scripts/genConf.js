const { openYAML } = require("./utils");
const { writeFileSync, readFileSync } = require("fs");
const { paramCase } = require("param-case");

const {
  meta: { title, shortTitle, description, applicationId, version, author },
  engine: { width, height },
} = openYAML("./project.config.yml");

const camelTitle = paramCase(title);

const configXml = `
<?xml version='1.0' encoding='utf-8'?>
<widget id="${applicationId}" version="${version}" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>${shortTitle}</name>
    <description>${description}</description>
${author.map(
  ({ email, href }) =>
    "    " + `<author email="${email}" href="${href}"></author>`
)}
    <content src="index.html" />
</widget>
`;
writeFileSync("./config.xml", configXml);

const nwPackageJson = {
  name: camelTitle,
  main: "index.html",
  "chromium-args": "--force-color-profile=srgb --disable-raf-throttling",
  window: {
    title,
    width,
    height,
    position: "center",
  },
};
writeFileSync("./www/package.json", JSON.stringify(nwPackageJson, null, 2));

const thisPackageJson = JSON.parse(
  readFileSync("./package.json", { encoding: "utf8" })
);
thisPackageJson.name = camelTitle;
thisPackageJson.displayName = title;
thisPackageJson.description = description;
thisPackageJson.version = version;
writeFileSync("./package.json", JSON.stringify(thisPackageJson, null, 2));
