const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  builder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  microMarket: String,
  type: { type: String, enum: ['residential', 'commercial', 'plot'], default: 'residential' },
  reraNumber: String,
  description: String,
  images: [String],
  status: { type: String, default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);