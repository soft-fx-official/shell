const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container
const W5MFTypesGeneratePlugin = require('w5mf-types-generate')
const { getUpdateRemotes } = require('w5mf-types-tools')
const { dependencies } = require('./package.json')
const config = require('./src/config')

module.exports = {
  webpack: function (webpackConfig, env) {
    webpackConfig.output.publicPath = 'auto'
    webpackConfig.output.uniqueName = config.appName

    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new ModuleFederationPlugin({
        name: config.appName,
        filename: 'remoteEntry.js',
        exposes: config.exposes,
        remotes: getUpdateRemotes(config.remotes),
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies['react'],
          },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
        },
      }),
      new W5MFTypesGeneratePlugin({ appName: config.appName }),
    ]

    webpackConfig.module.rules = [
      ...webpackConfig.module.rules,
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'dts-loader',
            options: {
              name: config.appName,
              exposes: config.exposes,
              typesOutputDir: path.resolve(__dirname, `./w5mf-types`),
            },
          },
        ],
      },
    ]
    return webpackConfig
  },
}
