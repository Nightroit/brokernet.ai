const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
  builder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  title: { type: String, required: true },
  content: { type: String, required: true },
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model('Update', updateSchema);