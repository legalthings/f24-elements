const path = require('path');

module.exports = {
    productionSourceMap: false,
    configureWebpack: {
        output: {
            filename: '[name].[hash:8].js'
        },
        resolve: {
            alias: {
                css: path.resolve(__dirname, 'src/assets/scss/'),
                images: path.resolve(__dirname, 'src/assets/images/'),
                icons: path.resolve(__dirname, 'src/assets/icons/')
            }
        }
    }
};
