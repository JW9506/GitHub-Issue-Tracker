const { override, addWebpackResolve } = require('customize-cra')
const path = require('path')

module.exports = {
  webpack: (config, env) => {
    config.plugins = config.plugins.filter((plugin) => {
      const name = plugin.constructor.name.toString()
      return !['ForkTsCheckerWebpackPlugin', 'ESLintWebpackPlugin'].includes(
        name
      )
    })
    return override(
      addWebpackResolve({
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      })
    )(config, env)
  },
}
