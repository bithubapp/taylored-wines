var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm"
}, {
  bundleAssets: {
    infer: false,
    glob: ["node_modules/opensourced-bithub/images/**/*","node_modules/font-awesome/fonts/**/*"]
  }
});