const { override, disableEsLint } = require('customize-cra')

module.exports = {
  webpack: (config, env) => {
    const tscheckPlugin = config.plugins.length - 1
    if ('tsconfig' in config.plugins[tscheckPlugin]) {
      config.plugins.splice(tscheckPlugin, 1)
    }
    return override(disableEsLint())(config, env)
  },
}
