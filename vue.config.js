/**
 * Created by xuanjinliang on 2018/10/29.
 */

const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

const minimizer =
  process.env.NODE_ENV === 'production'
    ? [
        new TerserPlugin({
          terserOptions: {
            output: {
              beautify: false
            },
            warnings: false
          }
        })
      ]
    : []

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    disableHostCheck: true,
    port: 9999
  },

  css: {
    loaderOptions: {
      css: {
        localIdentName: '[local]_[hash:base64:8]',
        camelCase: 'only'
      },
      less: {
        javascriptEnabled: true
      }
    }
  },

  productionSourceMap: process.env.NODE_ENV !== 'production',

  configureWebpack: {
    optimization: {
      minimizer,
      splitChunks: {
        cacheGroups: {
          components: {
            name: `chunk-components`,
            test: /[\\/]components[\\/]/,
            priority: 0,
            chunks: 'async',
            enforce: true
          },
          commonStyle: {
            name: `chunk-style`,
            test: /\.less$/,
            minChunks: 2,
            priority: 0,
            chunks: 'async',
            enforce: true
          }
        }
      }
    },
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
