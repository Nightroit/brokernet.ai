const express = require('express');
const router = express.Router();
const Unit = require('../models/Unit');
const { protect, authorize } = require('../middleware/auth');

router.get('/project/:projectId', protect, async (req, res) => {
  const units = await Unit.find({ project: req.params.projectId });
  res.json(units);
});

router.post('/', protect, authorize('builder'), async (req, res) => {
  const unit = await Unit.create(req.body);
  res.status(201).json(unit);
});

router.put('/:id', protect, authorize('builder'), async (req, res) => {
  const unit = await Unit.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(unit);
});

module.exports = router;