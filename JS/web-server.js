// const http = require('http')
// const fs = require('fs')
// const port = 3000

// const server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     fs.readFile('../HTML/index.html', function(error, data) {
//         if(error) {
//             res.writeHead(404)
//             res.write('Error: File Not Found')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// })

// server.listen(port, function(error) {
//     if(error) {
//         console.log('Klaida ', error)
//     } else {
//         console.log('Serverio vartai ' + port)
//     }
// })
var fs = require('fs');

var http = require('http');

var server = http.createServer(function(req, res){
  console.log("WEB puslapiai: " + req.url);


  if(req.url === '/index' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '../index.html').pipe(res);
  } else if(req.url === '/index.css') {
    res.writeHead(200, {'Content-Type': 'text/css; charset-utf-8'});
    fs.createReadStream(__dirname + '../STYLE/index.css').pipe(res);
  } else{
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('Tikrinamas prievadas 3000');
