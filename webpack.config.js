module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./build.js",
    },
    //stats: "detailed",
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader:'babel-loader'
        },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }]
    }
}