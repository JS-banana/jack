const spawn = require('cross-spawn')

// spawn('yarn', ['lerna', 'run', 'dev', '--scope', 'vuetify', '--stream'], {
//   stdio: 'inherit',
// })
spawn('yarn', ['lerna', 'info'])
