export default {
  // Attache to existing server
  magnet: 'http',

  port: 8080, // Run at port
  // https://github.com/primus/primus#client-library
  library: true, // Enable primus.library()
  // save: __dirname +'/../../static/primus.js',

  // https://github.com/primus/primus#getting-started
  transformer: 'uws',
}
