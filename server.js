const http = require('http')
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end('hello world\n')
}).listen(3000)

console.log('server listen port at http://127.0.0.1:3000/')