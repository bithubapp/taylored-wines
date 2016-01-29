var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm"
}, {
  minify: false,
  bundleAssets: {
    infer: true,
    glob: ["node_modules/opensourced-bithub/images/**/*","node_modules/font-awesome/fonts/**/*"]
  }
});