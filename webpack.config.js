const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {merge} = require("webpack-merge");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const commonConfig = {
  context: path.resolve(__dirname, "./src/"),
  entry: {
    'bundle': ["./js/index.js", "./scss/application.scss"],
    'panel': ["./js/panel.js", "./scss/panel/panel.scss"],
  },
  output: {
    path: path.resolve(__dirname, "./assets/"),
    publicPath: "/public",
    filename: "./js/[name].js",
    assetModuleFilename: "./",
  },
  devServer: {
    hot: true,
    open: false,
    host: '0.0.0.0',  // Permet d'écouter sur toutes les interfaces réseau
    port: 8080,        // Le port que tu veux utiliser
    client: {
      overlay: true,
    },
    watchFiles: ['www/site/*.php'],
    static: {
      directory: path.resolve('./public/assets'),
      watch: {
        ignored: ['**/*.json','**/*.sess', '**/*.jpg', '**/*.webp','**/*.png', '**/*.gif'],
      },
    },
    allowedHosts: [
      "dev.local",
      "127.0.0.1",
      "0.0.0.0",
      path.basename(__dirname)+".test",
    ],
    client: {
      overlay: true,
    },
    // CORS
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            sourceMaps: true,
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {publicPath: "."},
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "./images/[name][ext]",
        },
      },
      {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
    }),
    /*new BrowserSyncPlugin({
      host: "dev.local",
      watch: false,
      port: 3000,
      codeSync: false,
      proxy: path.basename(__dirname)+".test",
      open: "external",
      reload: false,
    }),*/
  ],
};

/**
 * Export config based on mode
 */
module.exports = (env, argv) => {
  const mode = argv.mode;

  /**
   * Development config
   */
  if (mode === "development") {
    return merge(commonConfig, {
      devtool: "inline-source-map",
    });
  }

  /**
   * Production config
   */
  if (mode === "production") {
    return merge(commonConfig, {
      devtool: "source-map",
    });
  }
};
