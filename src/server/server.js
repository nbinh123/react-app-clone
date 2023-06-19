const express = require("express")
const app = express()
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

const server = http.createServer(app)

app.use(cors())

const io = new Server(server, {
    cors: {

        // đây là port của ứng dụng react
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    } 
})


// đây là port của server
server.listen(2222, () => {
    console.log("Listening at port 2222")
})

let onlineMembers = []
let conversation = []

io.on("connection",(socket) => {

    let privateMessages = []

    console.log("user connected:  " + socket.id)
    socket.on("disconnect",() => {
        let index = onlineMembers.findIndex((user) => {
            user.id = socket.id
        })
        onlineMembers.splice(index, 1)
        io.sockets.emit("Server-send-onlineMembers", onlineMembers)
        console.log("user disconnect")
    })
    socket.on("message",(data) => {
        socket.emit("message", data)
        console.log(data)
    })

    // lần đầu connect sẽ trả về mảng những người đang online
    socket.on("Client-send-connection", () => {
        io.sockets.emit("Server-send-onlineMembers", onlineMembers)
    })
    socket.on("client-send-email", (data) => {
        console.log(data)
    })
    socket.on("Client-send-name", (data) => {
        
        let index = onlineMembers.findIndex((user) => {
            return user.name === data.name
        })
        if(index === -1 ){
            socket.emit("Client-send-name", data)
            onlineMembers.push(data)
            io.sockets.emit("Server-send-onlineMembers", onlineMembers)     
        }else{
            socket.emit("Server-send-error", "Người dùng đã tồn tại")
        }
    })
    socket.on("Server-send-id", (data) => {
        socket.emit("Server-send-id", socket.id)
    })
    socket.on("Client-send-message-all", (data) => {
        //  trong data sẽ có name và message
        conversation.push(data)
        io.sockets.emit("Server-send-message-all", conversation)
    })
    socket.on("Client-send-message-private", (data) => {
        //  trong data sẽ có id và message
        //  id dùng để xác nhận người nhận
        //  io.to("socket.id").emit()
        privateMessages.push(data)
        io.to(data.id).emit("Client-send-message-private", privateMessages)
    })
})







