import webpack from "webpack";
import path from "path";

export default {
    mode: "development",
    entry: {
        fromEvent: "./fromEvent/index.js"
    },
    output: {
        path: path.resolve(__dirname),
        publicPath: "/",
        filename: "[name]/bundle.js"
    },
    resolve: {
        extensions: [ ".js", ".json" ]
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
