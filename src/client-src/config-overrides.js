const { override, disableEsLint } = require('customize-cra')

module.exports = {
  webpack: (config, env) => {
    config.plugins = config.plugins.filter((plugin) => {
      const name = plugin.constructor.name.toString()
      return !['ForkTsCheckerWebpackPlugin', 'ESLintWebpackPlugin'].includes(
        name
      )
    })
    return override(disableEsLint())(config, env)
  },
}
