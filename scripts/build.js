const fg = require('fast-glob')
// const config = require('./config');

const getPackages = async () => {
  const entries = await fg('packages/**/index.js', { deep: 2 })
  console.log('entries', entries)
}

// test
getPackages()
