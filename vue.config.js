module.exports = {
    productionSourceMap: false,
    configureWebpack: {
        output: {
            filename: '[name].[hash:8].js'
        }
    }
};
