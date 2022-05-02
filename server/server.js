var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var io = require('socket.io')(server);



io.on('connection', (socket) => {
    console.log('User online');

    socket.on('canvas-data', (data) => {
        socket.broadcast.emit('canvas-data', data);
    })
})

server.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on :3000');
  });