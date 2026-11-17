const Message = require('../models/Message');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('join-room', (roomId) => {
      socket.join(roomId);
    });

    socket.on('send-message', async (data) => {
      const { roomId, senderId, content } = data;
      const message = await Message.create({ roomId, sender: senderId, content });
      const populated = await Message.findById(message._id).populate('sender', 'name');
      io.to(roomId).emit('receive-message', populated);
    });
  });
};