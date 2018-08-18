var express = require('express')
var socket = require('socket.io')

//App Setup
var app = express()
var server = app.listen(4000, () => {
    console.log('listening to port 3000!')
}) 


// Static files
app.use(express.static('public'))

// Socket Setup
var io = socket(server)

io.on('connection', (socket) => {

    console.log(`Made socket connection: ${socket.id}`)

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })

    
})