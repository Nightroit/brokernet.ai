const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  roomId: { type: String, required: true }, // format: projectId_brokerId
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: String,
  attachment: String,
  read: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);