const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        filename: "./build.js",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.png'],
    },
    //stats: "detailed",
    module: {
        rules: [
            {
            test: /\.jsx?$/,
            loader:'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    //watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 2000
    },
}

