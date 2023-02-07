const path = require('path');

module.exports = {
    mode: 'production',
    watch: true,
    entry: [
        __dirname + '/src/index.js',
        __dirname + '/src/styles/scss/styles.scss',
        __dirname + '/src/styles/scss/home/home.scss',
        __dirname + '/src/styles/scss/education/education.scss',
        __dirname + '/src/styles/scss/themes/dark-theme.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'js/app.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9000,
        hot: true,
        compress: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    }
};