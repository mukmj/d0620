var http = require('http'); //import랑 비슷
var fs = require("fs");
var server = http.createServer(function(req, res) {
   //성공했는지 실패했는지 여부(200은 성공)

  //http://localhost/index.html : req.url = index.html
   //node . 을 쓴 위치를 dirname이 가져옴
   var url = "";
   if(req.url == "/"){
     url = "/index.html";
   }else if(req.url == "/favicon.ico") {
     return res.writeHead(404);
   }else if(require("path").extname(req.url) == ".css"){ //확장명찾는기능
     url = req.url;
     res.setHeader('Content-Type', 'text/css');
   }else{
     url = req.url;
     res.setHeader('Content-Type', 'text/html');
   }
   res.statusCode = 200;
   res.end(fs.readFileSync(__dirname + url));
});

server.listen(80, function() { //listen 켜지면
  console.log(`Server running`);
});
