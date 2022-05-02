var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, './public')));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

io.on('connection', (socket) => {
    console.log('User online');

    socket.on('canvas-data', (data) => {
        socket.broadcast.emit('canvas-data', data);
    });

    socket.on('disconnect', () => {
        console.log("user disconnected");
    });
})


server.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on :3000');
  });