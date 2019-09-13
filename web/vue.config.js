const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: "./",
  outputDir: "../www",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"));
  }
};
