const express = require('express');
const router = express.Router();
const Update = require('../models/Update');
const { protect, authorize } = require('../middleware/auth');

router.post('/', protect, authorize('builder'), async (req, res) => {
  const update = await Update.create({ ...req.body, builder: req.user._id });
  res.status(201).json(update);
});

router.get('/', protect, async (req, res) => {
  const { city, projectId } = req.query;
  let filter = {};
  if (projectId) filter.project = projectId;
  const updates = await Update.find(filter)
    .populate('builder', 'name firmName')
    .populate('project', 'name city')
    .sort({ createdAt: -1 });
  res.json(updates);
});

module.exports = router;