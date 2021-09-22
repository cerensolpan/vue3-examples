const socketio =require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

const PORT = process.env.PORT || 2021;

const server = http.createServer(app)

const io = socketio(server,{
    cors:{
        origin:"*",
        method: ["GET","POST","OPTIONS"]
    }
});

server.listen(PORT,()=>{
    console.log(`Sunucu ${PORT} üzerinden sunulmaktadır.` );
})