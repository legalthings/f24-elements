module.exports = {
    productionSourceMap: false,
    publicPath: '.',
    configureWebpack: {
        output: {
            filename: '[name].[hash:8].js'
        }
    }
};
