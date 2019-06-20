var http = require('http'); //import랑 비슷
var fs = require("fs");
var server = http.createServer(function(req, res) {
  res.statusCode = 200; //성공했는지 실패했는지 여부(200은 성공)
  res.setHeader('Content-Type', 'text/html');
  //http://localhost/index.html : req.url = index.html
   //node . 을 쓴 위치를 dirname이 가져옴
   var url = "";
   if(req.url == "/"){
     url = "/index.html";
   }else{
     url = req.url;
   }
  res.end(fs.readFileSync(__dirname + url));
});

server.listen(80, function() { //listen 켜지면
  console.log(`Server running`);
});
