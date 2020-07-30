const express = require('express');
const socket = require('socket.io');

const app = express();
app.use(express.static('public'));

const server = app.listen(4000,()=>console.log('server running on port 4000'));

const io = socket(server);

io.on('connection',(socket)=>{
    console.log('client online');

    socket.on('chat',(data)=>{
        console.log(data);
        io.sockets.emit('chat',data);
    });

    socket.on('typing',(data)=>{
        console.log(data);
        socket.broadcast.emit('typing',data);
    });

});