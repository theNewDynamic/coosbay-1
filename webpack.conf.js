import webpack from "webpack";
import path from "path";

export default {
  module: {
    loaders: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      },
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
        query: {cacheDirectory: true}
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      "fetch": "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    })
  ],

  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"],
    cms: ["./js/cms"],
    main: ["./js/main"],
    lodging: ["./js/lodging"],
    tourcharters: ["./js/tourcharters"],
    equipment: ["./js/equipment"],
    events: ["./js/events"],
    calendar: ["./js/calendar"],
    instagram: ["./js/instagram"],
    search: ["./js/search"],
    dining: ["./js/dining"]
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    publicPath: "/js",
    filename: "[name].js"
  },
  externals:  [/^vendor\/.+\.js$/],
  devtool: 'source-map'
};
