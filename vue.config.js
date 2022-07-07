const ENV = process.env.NODE_ENV
module.exports = {
  lintOnSave: ENV !== "production",
  publicPath: "./",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://175.178.64.133:7000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}
