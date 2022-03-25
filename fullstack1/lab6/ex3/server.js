const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile('/Users/saku/gbc-bcdv/fullstack1/lab6'+'/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', (socket) => {
    console.log('user disconnected');
  });
  socket.on('disconnectclicked', (socket) => {
    console.log('user disconnected clicked');
  });
  socket.on('connectclicked', (socket) => {
    console.log('user connected clicked');
  });
  socket.on('message', (socket) => {
    console.log('Received Message');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});