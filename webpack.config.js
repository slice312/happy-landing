const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = (env, argv) => {
    return (argv.mode === "production")
        ? prodConfig
        : devConfig;
};

const prodConfig =  {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "./build"),
        clean: true
    },
    plugins: [
        new HtmlPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: "styles.[contenthash].css"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/assets",
                    to: "./assets"
                },
                {
                    from: "./config.json",
                    to: "./config.json"
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            "..."
        ]
    }
};

const devConfig = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build")
    },
    devServer: {
        port: 5007,
        static: "./build",
        watchFiles: ["./src/index.html"],
        hot: true
    },
    plugins: [
        new HtmlPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/assets",
                    to: "./assets"
                },
                {
                    from: "./config.json",
                    to: "./config.json"
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    }
};