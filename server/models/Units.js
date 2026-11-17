const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  unitNumber: String,
  tower: String,
  floor: Number,
  type: String, // 2BHK, 3BHK, Office, etc.
  area: Number,
  price: Number,
  status: { type: String, enum: ['available', 'blocked', 'booked', 'sold'], default: 'available' },
  costSheetUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Unit', unitSchema);