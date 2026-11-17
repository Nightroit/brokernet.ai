const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['broker', 'builder', 'rm', 'admin'], default: 'broker' },
  reraNumber: String,
  reraState: String,
  cities: [String],
  firmName: String,
  phone: String,
  documents: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);