const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const DashboardPlugin = require("@module-federation/dashboard-plugin");

const deps = require("./package.json").dependencies;
module.exports = {
    devtool: 'source-map',
    output: {
        publicPath: "http://localhost:8084/",
    },

    resolve: {
        extensions: [".jsx", ".js", ".json"],
    },

    devServer: {
        port: 8084,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "admin",
            filename: "remoteEntry.js",
            remotes: {
                mine: "mine@http://localhost:8083/remoteEntry.js",
                checkout: "checkout@http://localhost:8082/remoteEntry.js",
                search: "search@http://localhost:8081/remoteEntry.js",
                home: "home@http://localhost:8080/remoteEntry.js",
            },
            exposes: {
                "./Admin": "./src/AdminPage",
                "./IsAdminWidget": "./src/IsAdminWidget",
                "./reducer": "./src/reducer",
                "./ToggleAdmin": "./src/ToggleAdmin"
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        }),
        new DashboardPlugin({
            dashboardURL: "http://localhost:3000/api/update",
            metadata: {
                source: {
                    url: "http://github.com",
                },
                remote: "http://localhost:8081/remoteEntry.js",
            },
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
};
