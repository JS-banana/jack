const path = require('path')

exports.alias = {
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  docs: path.resolve(__dirname, '../docs'),
  '@ah-ailpha/components': path.resolve(__dirname, '../packages/components'),
}
