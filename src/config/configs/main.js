module.exports = {
  appName: 'shell', // NOTE: can't name main
  exposes: {
    './main': './src/main',
  },
  remotes: {
    common: 'common@https://s3w.fxopen.com/common/main/remoteEntry.js',
    uikit: 'uikit@https://s3w.fxopen.com/uikit/main/remoteEntry.js',
  },
}
