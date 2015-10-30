module.exports = function(io){

  io.sockets.on('connection', function(socket){
    console.log('Socket connected with id: ', socket.id);
  });
}
