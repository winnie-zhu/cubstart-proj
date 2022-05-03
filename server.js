var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var io = require('socket.io')(server);

// app.get('/', function(req, res){
//     res.render('public/index.cjs');
//   });

io.on('connection', (socket) => {
    console.log('User online');

    socket.on('canvas-data', (data) => {
        console.log("server sending canvas");
        socket.broadcast.emit('canvas-data', data);
    });
})

app.use(express.static("public"));


server.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on :3000');
  });