// const TerserPlugin = require('terser-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        login: path.resolve(__dirname, 'src/login.js'),
        registration: path.resolve(__dirname, 'src/registration.js'),
        account: path.resolve(__dirname, 'src/account.js'),
        parties: path.resolve(__dirname, 'src/parties.js'),
        party_info: path.resolve(__dirname, 'src/party-info.js'),
        member: path.resolve(__dirname, 'src/member.js'),
        test: path.resolve(__dirname, 'src/test.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    // optimization: {
    //     minimizer: [new TerserPlugin({
    //         extractComments: false,
    //     })],
    // },
    watch: true
}
