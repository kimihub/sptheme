const path = require('path')
const connect = require('connect')
const serveStatic = require('serve-static')
const PORT = process.env.PORT || 8080

connect().use(serveStatic(path.resolve(__dirname, '../dist/'))).listen(PORT, function(){
   console.log('Server running on ' + PORT + '...')
})
