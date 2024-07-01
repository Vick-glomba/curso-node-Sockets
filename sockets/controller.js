


const socketController= (socket) => {
    console.log("Cliente conectado", socket.id);

    socket.on("disconnect", () =>{
        console.log("Cliente desconectado",socket.id)
    })

    socket.on("enviar-mensaje", (payload, callback) =>{
        const id= 131654
        callback(id)
        //broadcast a todos los clientes, menos el que lo envia, 
        //para devolver al que lo envia se emplea el callback
        socket.broadcast.emit("enviar-mensaje", payload)
    })



}


module.exports= {
    socketController
}