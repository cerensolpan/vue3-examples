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
    io.on("connection", (socket) => {
        console.log("CONNECTIONN!");
        console.log(socket.id);
        //socket.join(roomId)---- odaya dahil olmak için
        //io.in(roomId).emit()---belli bir odaya mesaj göndermek için
        //! Karşılama Mesajı Gönder..
        socket.emit("WELCOME_MESSAGE",`Welcome ${socket.id}! Have a nice day!`)
        socket.on("NEW_BOOKMARK_EVENT",bookmark=>{
            console.log("New Bookmark Geldi",bookmark);
            io.emit("NEW_BOOKMARK_ADDED")
        })
    })
})